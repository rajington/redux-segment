import test from 'tape';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import createAnalyticsStub from './helpers/segment-stub';
import { warn } from './helpers/console-stub';
import { createTracker, EventTypes } from '../src/index';
import { root } from './helpers/env-setup';


test('Page - router support', t => {
  t.test('react-router-redux', st => {
    st.plan(2);

    root.analytics = createAnalyticsStub();
    const node = root.document.getElementById('app');

    const history = createMemoryHistory();
    const middleware = routerMiddleware(history);
    const tracker = createTracker();

    const Component = () => <h1>Hello!</h1>

    const store = createStore(
      combineReducers({
        router: routerReducer
      }),
      applyMiddleware(middleware, tracker)
    )

    ReactDOM.render(
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div>
            <Route exact path="/" component={ Component } />
            <Route path="/foo" component={ Component } />
            <Route path="/bar" component={ Component } />
          </div>
        </ConnectedRouter>
      </Provider>,
      node
    );

    const initialEvent = root.analytics[0] && root.analytics[0][0];
    st.equal(initialEvent, 'page', 'triggers page event on load');

    store.dispatch(push('/foo'));

    const fooPushEvent = root.analytics[1] && root.analytics[1][0];
    st.equal(fooPushEvent, 'page', 'triggers page event on navigation');

    ReactDOM.unmountComponentAtNode(node);
  });
});


test('Page - spec', t => {
  t.test('default', st => {
    st.plan(2);


    root.analytics = createAnalyticsStub();
    const explicitAction = {
      type: 'CHANGE_VIEW',
      meta: {
        analytics: {
          eventType: EventTypes.page,
        },
      },
    };
    const implicitAction = {
      type: 'CHANGE_VIEW',
      meta: {
        analytics: EventTypes.page,
      },
    };
    const identity = val => val;
    const tracker = createTracker();
    const store = compose(
      applyMiddleware(tracker)
    )(createStore)(identity);


    store.dispatch(explicitAction);
    const defaultExplicitEvent = root.analytics[0] && root.analytics[0][0];
    st.equal(defaultExplicitEvent, 'page', 'emits a page event on explicit actions');

    store.dispatch(implicitAction);
    const defaultImplicitEvent = root.analytics[1] && root.analytics[1][0];
    st.equal(defaultImplicitEvent, 'page', 'emits a page event on implicit actions');


    root.analytics = null;
  });

  t.test('name', st => {
    st.plan(1);


    root.analytics = createAnalyticsStub();
    const PAGE_NAME = 'Home';
    const action = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
          },
        },
      },
    };
    const identity = val => val;
    const tracker = createTracker();
    const store = compose(
      applyMiddleware(tracker)
    )(createStore)(identity);


    store.dispatch(action);
    const event = [
      root.analytics[0] && root.analytics[0][0],
      root.analytics[0] && root.analytics[0][1],
    ];
    st.deepEqual(event, ['page', PAGE_NAME], 'passes along the name of the page');


    root.analytics = null;
  });

  t.test('category', st => {
    st.plan(2);


    root.analytics = createAnalyticsStub();
    const _oldWarn = console.warn;
    console.warn = warn;
    const PAGE_NAME = 'Home';
    const CAT_NAME = 'Landing';
    const action = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
            category: CAT_NAME,
          },
        },
      },
    };
    const missingNameAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            category: CAT_NAME,
          },
        },
      },
    };
    const identity = val => val;
    const tracker = createTracker();
    const store = compose(
      applyMiddleware(tracker)
    )(createStore)(identity);


    store.dispatch(action);
    const event = [
      root.analytics[0] && root.analytics[0][0],
      root.analytics[0] && root.analytics[0][1],
      root.analytics[0] && root.analytics[0][2],
    ];
    st.deepEqual(event, ['page', CAT_NAME, PAGE_NAME], 'passes along the category of the page');

    const invalidAction = () => store.dispatch(missingNameAction);
    st.throws(invalidAction, /missing name/, 'throws error when name prop is missing');


    root.analytics = null;
    console.warn = _oldWarn;
  });

  t.test('properties', st => {
    st.plan(3);


    root.analytics = createAnalyticsStub();
    const PAGE_NAME = 'Home';
    const CAT_NAME = 'Landing';
    const TITLE_NAME = 'Homepage';
    const action = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
            category: CAT_NAME,
            properties: {
              title: TITLE_NAME,
            },
          },
        },
      },
    };
    const noCategoryAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
            properties: {
              title: TITLE_NAME,
            },
          },
        },
      },
    };
    const justPropertiesAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            properties: {
              title: TITLE_NAME,
            },
          },
        },
      },
    };
    const identity = val => val;
    const tracker = createTracker();
    const store = compose(
      applyMiddleware(tracker)
    )(createStore)(identity);


    store.dispatch(action);
    const event = [
      root.analytics[0] && root.analytics[0][0],
      root.analytics[0] && root.analytics[0][1],
      root.analytics[0] && root.analytics[0][2],
      root.analytics[0] && root.analytics[0][3],
    ];
    st.deepEqual(event, ['page', CAT_NAME, PAGE_NAME, { title: TITLE_NAME }], 'passes along the properties of the page when category is present');

    store.dispatch(noCategoryAction);
    const noCatEvent = [
      root.analytics[1] && root.analytics[1][0],
      root.analytics[1] && root.analytics[1][1],
      root.analytics[1] && root.analytics[1][2],
    ];
    st.deepEqual(noCatEvent, ['page', PAGE_NAME, { title: TITLE_NAME }], 'passes along the properties of the page when category is not present');

    store.dispatch(justPropertiesAction);
    const justPropertiesEvent = [
      root.analytics[2] && root.analytics[2][0],
      root.analytics[2] && root.analytics[2][1],
    ];
    st.deepEqual(justPropertiesEvent, ['page', { title: TITLE_NAME }], 'passes along the properties of the page when category and name are not present');


    root.analytics = null;
  });

  t.test('options', st => {
    st.plan(4);


    root.analytics = createAnalyticsStub();
    const PAGE_NAME = 'Home';
    const CAT_NAME = 'Landing';
    const TITLE_NAME = 'Homepage';
    const PROPERTIES = {
      title: TITLE_NAME,
    };
    const OPTIONS = {
      'All': false,
      'Mixpanel': true,
      'KISSmetrics': true,
    };
    const action = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
            category: CAT_NAME,
            properties: PROPERTIES,
            options: OPTIONS,
          },
        },
      },
    };
    const noCategoryAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            name: PAGE_NAME,
            properties: {
              title: TITLE_NAME,
            },
            options: OPTIONS,
          },
        },
      },
    };
    const startAtPropertiesAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            properties: {
              title: TITLE_NAME,
            },
            options: OPTIONS,
          },
        },
      },
    };
    const justOptionsAction = {
      type: 'CHANGE_VIEW',
      to: 'home',
      meta: {
        analytics: {
          eventType: EventTypes.page,
          eventPayload: {
            options: OPTIONS,
          },
        },
      },
    };
    const identity = val => val;
    const tracker = createTracker();
    const store = compose(
      applyMiddleware(tracker)
    )(createStore)(identity);


    store.dispatch(action);
    const event = [
      root.analytics[0] && root.analytics[0][0],
      root.analytics[0] && root.analytics[0][1],
      root.analytics[0] && root.analytics[0][2],
      root.analytics[0] && root.analytics[0][3],
      root.analytics[0] && root.analytics[0][4],
    ];
    st.deepEqual(event, ['page', CAT_NAME, PAGE_NAME, PROPERTIES, OPTIONS], 'passes along the options of the page event when category is present');

    store.dispatch(noCategoryAction);
    const noCatEvent = [
      root.analytics[1] && root.analytics[1][0],
      root.analytics[1] && root.analytics[1][1],
      root.analytics[1] && root.analytics[1][2],
      root.analytics[1] && root.analytics[1][3],
    ];
    st.deepEqual(noCatEvent, ['page', PAGE_NAME, PROPERTIES, OPTIONS], 'passes along the options of the page event when category is not present');

    store.dispatch(startAtPropertiesAction);
    const startAtPropertiesEvent = [
      root.analytics[2] && root.analytics[2][0],
      root.analytics[2] && root.analytics[2][1],
      root.analytics[2] && root.analytics[2][2],
    ];
    st.deepEqual(startAtPropertiesEvent, ['page', PROPERTIES, OPTIONS], 'passes along the options of the page when only properties are present');

    store.dispatch(justOptionsAction);
    const optionsOnlyEvent = [
      root.analytics[3] && root.analytics[3][0],
      root.analytics[3] && root.analytics[3][1],
      root.analytics[3] && root.analytics[3][2],
    ];
    st.deepEqual(optionsOnlyEvent, ['page', {}, OPTIONS], 'passes along the options of the page when other properties are not present');


    root.analytics = null;
  });
});
