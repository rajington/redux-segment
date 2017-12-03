import { warn } from './utils';
import EventTypes from './event/types';
import { defaultMapper, defaultClient } from './event/configuration';
import { extractIdentifyFields } from './event/identify';
import { extractPageFields } from './event/page';
import { extractTrackFields } from './event/track';
import { extractAliasFields } from './event/alias';
import { extractGroupFields } from './event/group';


function emit(type: string, fields: Array, { client }: Object) {
  const currentClient = client();

  if (currentClient && typeof currentClient[type] === 'function') {
    currentClient[type](...fields);
  } else {
    warn('The analytics client you provided doesn\'t support ' +
         type +
         ' events. Make sure that the analytics.js script is loaded.');
  }
}

function createTracker(customOptions = {}) {
  const options = {
    mapper: { ...defaultMapper.mapper, ...customOptions.mapper },
    client: customOptions.client ? () => customOptions.client : defaultClient,
  };

  if (!options.client) {
    warn('Could not find an analytics client. Provide a client to' +
         'createTracker or make sure that the analytics.js script' +
         'is loaded and executed before your application code.');
  }

  return store => next => action => handleAction(store.getState.bind(store), next, action, options);
}

function createMetaReducer(customOptions = {}) {
  const options = {
    mapper: { ...defaultMapper.mapper, ...customOptions.mapper },
    client: customOptions.client ? () => customOptions.client : defaultClient,
  };

  if (!options.client) {
    warn('Could not find an analytics client. Provide a client to' +
         'createTracker or make sure that the analytics.js script' +
         'is loaded and executed before your application code.');
  }

  return function(reducer) {
    return function (prevState, action) {

      if (action.meta && action.meta.analytics) {
        return handleReducerSpec(reducer, prevState, action, options);
      }

      if (typeof options.mapper[action.type] === 'function') {
        const getState = ()=> prevState;
        let analytics = options.mapper[action.type](getState, action);

        return handleReducerSpec(reducer, prevState, appendAction(action, analytics), options);
      }

      if (typeof options.mapper[action.type] === 'string') {
        let analytics = {eventType: options.mapper[action.type]};
        return handleReducerSpec(reducer, prevState, appendAction(action, analytics), options);
      }

      return reducer(prevState, action);
    };
  };
}

function handleReducerSpec(reducer: Function, prevState: Object, action: Object, options: Object) {
  const spec = action.meta.analytics;

  if (Array.isArray(spec)) {
    spec.forEach(s => handleIndividualSpec(s, action, options));
  } else {
    handleIndividualSpec(spec, action, options);
  }

  return reducer(prevState, action);
}

function appendAction(action: Object, analytics: Object | Array) {

  action.meta = {
      ...action.meta,
      analytics: Array.isArray(analytics) ? analytics : { ...analytics }
  };

  return action;
}

function handleAction(getState: Function, next: Function, action: Object, options: Object) {

  if (action.meta && action.meta.analytics) {
    return handleSpec(next, action, options);
  }

  if (typeof options.mapper[action.type] === 'function') {

    let analytics = options.mapper[action.type](getState, action);
    return handleSpec(next, appendAction(action, analytics), options);
  }

  if (typeof options.mapper[action.type] === 'string') {

    let analytics = {eventType: options.mapper[action.type]};
    return handleSpec(next, appendAction(action, analytics), options);
  }

  return next(action);
}

function getFields(type: string, fields: Object, actionType: string) {
  const typeFieldHandlers = {
    [EventTypes.identify]: extractIdentifyFields,
    [EventTypes.page]: extractPageFields,
    [EventTypes.track]: eventFields => extractTrackFields(eventFields, actionType),
    [EventTypes.alias]: extractAliasFields,
    [EventTypes.group]: extractGroupFields,
    [EventTypes.reset]: () => [],
  };

  return typeFieldHandlers[type](fields);
}

function getEventType(spec) {
  if (typeof spec === 'string') {
    return spec;
  }

  return spec.eventType;
}

function handleIndividualSpec(spec: string | Object, action: Object, options: Object) {
  const type = getEventType(spec);

  // In case the eventType was not specified or set to `null`, ignore this individual spec.
  if (type && type.length) {
    const fields = getFields(type, spec.eventPayload || {}, action.type);

    if (fields instanceof Error) return warn(fields);

    emit(type, fields, options);
  }
}

function handleSpec(next: Function, action: Object, options: Object) {
  const spec = action.meta.analytics;

  if (Array.isArray(spec)) {
    spec.forEach(s => handleIndividualSpec(s, action, options));
  } else {
    handleIndividualSpec(spec, action, options);
  }

  return next(action);
}


export {
  createTracker,
  createMetaReducer,
  EventTypes,
};
