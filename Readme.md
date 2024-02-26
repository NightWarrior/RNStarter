### RNStarter
# Install with latest version. Create with react-native@latest and add boilerplate for ignite's Andross (Redux-Saga framework) from this project.

Like other projects that install both ios and android folders, then you have to do so much to change project name correctly and fix bits and pieces of it everywhere, this starter uses the approach of installing a fresh copy of react-native from official source and then adding the boilerplate in a simpler manner and installing libraries. 

Steps:

`npx react-native@latest init AwesomeProject`
```
cd AwesomeProject
yarn
cd ios
pod install
cd ..
yarn run
```

Confirm that the basic App starts successfully. Then copy over the folder `App` into root of AwesomeProject
After that we delete the old App.tsx at the root

`rm -rf App.tsx`

Also go to `index.js` and on the line `import App from ...` to

`import App from './App/App';`

If you want to use Flipper follow https://github.com/jk-gan/redux-flipper
Install react-native-flipper and redux-flipper

`yarn add react-native-flipper redux-flipper`

Also inside of flipper, you need to add the redux-debugger plugin
Then inside of `CreateStore.js` the redux middleware file add the following:
```
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
```
You also need to modify the podfile a bit, replace `flipper_config = ...` like with:

`flipper_config = FlipperConfiguration.enabled(["Debug"], { 'Flipper' => '0.201.0' })`

Install react-navigation (version 6 works)

`yarn add @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack`

Libraries required by other libraries:

`yarn add @react-native-async-storage/async-storage`

`yarn add react-native-gesture-handler`

I have react-native-paper installed, if you dont want to use it you can remove its usage 

`yarn add react-native-paper`

Now we add redux-sagas and related packages

`yarn add react-redux redux redux-saga redux-persist seamless-immutable reduxsauce`

Helpful libraries

`yarn add apisauce lodash moment`

