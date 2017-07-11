# Change Log

## [1.6.2](https://github.com/rangle/redux-segment/tree/1.6.2) (2017-06-13)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.6.1...1.6.2)

**Closed issues:**

- customMapper doesn't catch all events [\#99](https://github.com/rangle/redux-segment/issues/99)
- Install with react router redux, getting Cannot read property 'page' of undefined [\#92](https://github.com/rangle/redux-segment/issues/92)
- Regression in 1.6.0 [\#88](https://github.com/rangle/redux-segment/issues/88)
- possibility to override emit  [\#35](https://github.com/rangle/redux-segment/issues/35)
- Great! But what's changing? [\#11](https://github.com/rangle/redux-segment/issues/11)

**Merged pull requests:**

- fix: Don't throw when client is not defined [\#91](https://github.com/rangle/redux-segment/pull/91) ([bertrandk](https://github.com/bertrandk))
- Create meta reducer [\#86](https://github.com/rangle/redux-segment/pull/86) ([johannalee](https://github.com/johannalee))
- chore: Add changelog [\#85](https://github.com/rangle/redux-segment/pull/85) ([bertrandk](https://github.com/bertrandk))

## [1.6.1](https://github.com/rangle/redux-segment/tree/1.6.1) (2017-01-12)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.6.0...1.6.1)

**Fixed bugs:**

- \_ref.client is not updated [\#82](https://github.com/rangle/redux-segment/issues/82)
- \#73 breaks server side rendering due to usage of window object [\#79](https://github.com/rangle/redux-segment/issues/79)

**Merged pull requests:**

- fix: Allow redefining of client reference [\#84](https://github.com/rangle/redux-segment/pull/84) ([bertrandk](https://github.com/bertrandk))
- fix: Detect global on server and web workers [\#81](https://github.com/rangle/redux-segment/pull/81) ([bertrandk](https://github.com/bertrandk))

## [1.6.0](https://github.com/rangle/redux-segment/tree/1.6.0) (2017-01-02)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.5.0...1.6.0)

**Closed issues:**

- Ability to record multiple events when dispatching one action [\#77](https://github.com/rangle/redux-segment/issues/77)

**Merged pull requests:**

- Spreading the error message on multiple line throws browser errors. [\#78](https://github.com/rangle/redux-segment/pull/78) ([RussVanBert](https://github.com/RussVanBert))
- feat: allow user-specified analytics client [\#73](https://github.com/rangle/redux-segment/pull/73) ([bertrandk](https://github.com/bertrandk))

## [1.5.0](https://github.com/rangle/redux-segment/tree/1.5.0) (2016-11-16)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.4.2...1.5.0)

**Fixed bugs:**

- Custom Mapper function with optional analytics? [\#69](https://github.com/rangle/redux-segment/issues/69)

**Merged pull requests:**

- IE support [\#76](https://github.com/rangle/redux-segment/pull/76) ([shooka](https://github.com/shooka))
- feat: mapper supports returning array of events [\#74](https://github.com/rangle/redux-segment/pull/74) ([meatwallace](https://github.com/meatwallace))

## [1.4.2](https://github.com/rangle/redux-segment/tree/1.4.2) (2016-10-19)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.4.1...1.4.2)

**Fixed bugs:**

- Is it a good idea to raise error in tracking library? [\#34](https://github.com/rangle/redux-segment/issues/34)

**Closed issues:**

- Handling async actions states  [\#63](https://github.com/rangle/redux-segment/issues/63)
- npm install error with redux-segment on Windows \(no such file or directory redux-segment-842b1341\Icon\) [\#51](https://github.com/rangle/redux-segment/issues/51)

**Merged pull requests:**

- fix: don't throw...especially in production [\#71](https://github.com/rangle/redux-segment/pull/71) ([bertrandk](https://github.com/bertrandk))
- Ignore specs which do not have an eventType \#69 [\#70](https://github.com/rangle/redux-segment/pull/70) ([Inkdpixels](https://github.com/Inkdpixels))

## [1.4.1](https://github.com/rangle/redux-segment/tree/1.4.1) (2016-09-25)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.4.0...1.4.1)

**Closed issues:**

- Update redux-segment on NPM [\#67](https://github.com/rangle/redux-segment/issues/67)
- Possible to emit more than one than one analytic event? [\#61](https://github.com/rangle/redux-segment/issues/61)
- How to reset / log out? [\#57](https://github.com/rangle/redux-segment/issues/57)

**Merged pull requests:**

- Remove custom icon image from npm package [\#68](https://github.com/rangle/redux-segment/pull/68) ([bertrandk](https://github.com/bertrandk))

## [1.4.0](https://github.com/rangle/redux-segment/tree/1.4.0) (2016-09-24)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.3.0...1.4.0)

**Merged pull requests:**

- Reset event [\#65](https://github.com/rangle/redux-segment/pull/65) ([eviltwin](https://github.com/eviltwin))
- Multiple events [\#64](https://github.com/rangle/redux-segment/pull/64) ([eviltwin](https://github.com/eviltwin))

## [1.3.0](https://github.com/rangle/redux-segment/tree/1.3.0) (2016-08-26)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.2.0...1.3.0)

**Closed issues:**

- react-router-redux integration not autowiring? [\#59](https://github.com/rangle/redux-segment/issues/59)
- Docs issue with custom mapping [\#53](https://github.com/rangle/redux-segment/issues/53)
- Untagged actions get ignored by reducer. [\#45](https://github.com/rangle/redux-segment/issues/45)
- Critical dependencies warning due to requiring pre-built js file [\#36](https://github.com/rangle/redux-segment/issues/36)
- cut new release? [\#33](https://github.com/rangle/redux-segment/issues/33)
- Webpack Warning [\#25](https://github.com/rangle/redux-segment/issues/25)

**Merged pull requests:**

- Capture react-router-redux's change event [\#62](https://github.com/rangle/redux-segment/pull/62) ([bertrandk](https://github.com/bertrandk))
- Do not fail if "window" is undefined or analytics.js is not loaded [\#58](https://github.com/rangle/redux-segment/pull/58) ([ZauberNerd](https://github.com/ZauberNerd))

## [1.2.0](https://github.com/rangle/redux-segment/tree/1.2.0) (2016-08-02)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.1.0...1.2.0)

**Closed issues:**

- Server Side Rendering app broken if using redux-segment [\#56](https://github.com/rangle/redux-segment/issues/56)
- PR Proposal: provide action object in custom mapper [\#54](https://github.com/rangle/redux-segment/issues/54)

**Merged pull requests:**

- Give access to currently dispatched action in mapping function [\#55](https://github.com/rangle/redux-segment/pull/55) ([pandaiolo](https://github.com/pandaiolo))
- Fixed custom mapper handling. [\#52](https://github.com/rangle/redux-segment/pull/52) ([vasyabigi](https://github.com/vasyabigi))

## [1.1.0](https://github.com/rangle/redux-segment/tree/1.1.0) (2016-07-21)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.0.1...1.1.0)

**Closed issues:**

- With V1.0.1, getting 'require is not defined' error [\#50](https://github.com/rangle/redux-segment/issues/50)
- Build to single file to remove 'require' dependencies [\#49](https://github.com/rangle/redux-segment/issues/49)
- npm package is published without dist files [\#47](https://github.com/rangle/redux-segment/issues/47)

**Merged pull requests:**

- forward actions without meta. [\#46](https://github.com/rangle/redux-segment/pull/46) ([coopermaruyama](https://github.com/coopermaruyama))
- add syntax highlighting [\#44](https://github.com/rangle/redux-segment/pull/44) ([morenoh149](https://github.com/morenoh149))
- Fix typo [\#40](https://github.com/rangle/redux-segment/pull/40) ([morenoh149](https://github.com/morenoh149))

## [1.0.1](https://github.com/rangle/redux-segment/tree/1.0.1) (2016-07-01)
[Full Changelog](https://github.com/rangle/redux-segment/compare/1.0.0...1.0.1)

## [1.0.0](https://github.com/rangle/redux-segment/tree/1.0.0) (2016-06-27)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.7.2...1.0.0)

**Closed issues:**

- Missing payload [\#29](https://github.com/rangle/redux-segment/issues/29)

**Merged pull requests:**

- Fix typo [\#38](https://github.com/rangle/redux-segment/pull/38) ([luqmaan](https://github.com/luqmaan))
- Fix Build Issue [\#37](https://github.com/rangle/redux-segment/pull/37) ([relaxed-tomato](https://github.com/relaxed-tomato))
- Proposed typescript definitions [\#32](https://github.com/rangle/redux-segment/pull/32) ([DerekStrickland](https://github.com/DerekStrickland))
- amends documentation to specify that properties is required [\#30](https://github.com/rangle/redux-segment/pull/30) ([iolloyd](https://github.com/iolloyd))
- Feat 3rd party integration [\#26](https://github.com/rangle/redux-segment/pull/26) ([e-schultz](https://github.com/e-schultz))
- Update CI Node version [\#23](https://github.com/rangle/redux-segment/pull/23) ([bertrandk](https://github.com/bertrandk))
- chore\(tests\): use jsdom for tests [\#22](https://github.com/rangle/redux-segment/pull/22) ([e-schultz](https://github.com/e-schultz))
- Fix npm version badge in readme [\#21](https://github.com/rangle/redux-segment/pull/21) ([dmitry-zaets](https://github.com/dmitry-zaets))

## [0.7.2](https://github.com/rangle/redux-segment/tree/0.7.2) (2016-03-17)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.7.1...0.7.2)

**Fixed bugs:**

- fix\(page\): use expected router page event [\#19](https://github.com/rangle/redux-segment/pull/19) ([jhabdas](https://github.com/jhabdas))

## [0.7.1](https://github.com/rangle/redux-segment/tree/0.7.1) (2016-03-17)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.7.0...0.7.1)

## [0.7.0](https://github.com/rangle/redux-segment/tree/0.7.0) (2016-03-17)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.6.1...0.7.0)

**Merged pull requests:**

- Improve support for react-router-redux [\#17](https://github.com/rangle/redux-segment/pull/17) ([jhabdas](https://github.com/jhabdas))
- Adding react redux example [\#15](https://github.com/rangle/redux-segment/pull/15) ([sumitarora](https://github.com/sumitarora))
- Update readme to account for react-simple-router name change. [\#14](https://github.com/rangle/redux-segment/pull/14) ([SethDavenport](https://github.com/SethDavenport))
- Added Angular2 Redux example [\#13](https://github.com/rangle/redux-segment/pull/13) ([sumitarora](https://github.com/sumitarora))

## [0.6.1](https://github.com/rangle/redux-segment/tree/0.6.1) (2016-01-07)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.6.0...0.6.1)

## [0.6.0](https://github.com/rangle/redux-segment/tree/0.6.0) (2015-12-29)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.5.1...0.6.0)

**Merged pull requests:**

- Group [\#10](https://github.com/rangle/redux-segment/pull/10) ([bertrandk](https://github.com/bertrandk))

## [0.5.1](https://github.com/rangle/redux-segment/tree/0.5.1) (2015-12-29)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.5.0...0.5.1)

## [0.5.0](https://github.com/rangle/redux-segment/tree/0.5.0) (2015-12-29)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.4.0...0.5.0)

**Merged pull requests:**

- Alias [\#9](https://github.com/rangle/redux-segment/pull/9) ([bertrandk](https://github.com/bertrandk))

## [0.4.0](https://github.com/rangle/redux-segment/tree/0.4.0) (2015-12-29)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.3.1...0.4.0)

**Merged pull requests:**

- Track [\#8](https://github.com/rangle/redux-segment/pull/8) ([bertrandk](https://github.com/bertrandk))

## [0.3.1](https://github.com/rangle/redux-segment/tree/0.3.1) (2015-12-28)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.3.0...0.3.1)

## [0.3.0](https://github.com/rangle/redux-segment/tree/0.3.0) (2015-12-28)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.2.0...0.3.0)

**Fixed bugs:**

- Identity [\#7](https://github.com/rangle/redux-segment/pull/7) ([bertrandk](https://github.com/bertrandk))

## [0.2.0](https://github.com/rangle/redux-segment/tree/0.2.0) (2015-12-27)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.1.1...0.2.0)

**Merged pull requests:**

- chore: configure build steps [\#6](https://github.com/rangle/redux-segment/pull/6) ([bertrandk](https://github.com/bertrandk))
- Page event [\#5](https://github.com/rangle/redux-segment/pull/5) ([bertrandk](https://github.com/bertrandk))

## [0.1.1](https://github.com/rangle/redux-segment/tree/0.1.1) (2015-12-25)
[Full Changelog](https://github.com/rangle/redux-segment/compare/0.1.0...0.1.1)

## [0.1.0](https://github.com/rangle/redux-segment/tree/0.1.0) (2015-12-25)
**Merged pull requests:**

- feat: support redux-router [\#4](https://github.com/rangle/redux-segment/pull/4) ([bertrandk](https://github.com/bertrandk))
- chore: harmonize badges and add a license one [\#3](https://github.com/rangle/redux-segment/pull/3) ([bertrandk](https://github.com/bertrandk))
- redux-simple-router support [\#2](https://github.com/rangle/redux-segment/pull/2) ([bertrandk](https://github.com/bertrandk))
- Init [\#1](https://github.com/rangle/redux-segment/pull/1) ([bertrandk](https://github.com/bertrandk))
