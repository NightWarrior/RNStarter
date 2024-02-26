Steps:

`npx react-native@latest init AwesomeProject`
Go through the steps (Install dependencies)
```
cd AwesomeProject
yarn
cd ios
pod install
cd ..
yarn run
```

Once App starts successfully, copy over the folder `App` into root of AwesomeProject
Delete the old App.tsx at the root
`rm -rf App.tsx`

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

