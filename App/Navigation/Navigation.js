import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Containers/Login.screen';
import Home from '../Containers/Home.screen';

const Stack = createNativeStackNavigator();

const mainNav = () => (
  <Stack.Navigator initialRouteName={'Login'}>
    <Stack.Screen
      name="Login"
      options={{ headerShown: false }}
      component={Login}
    />
    <Stack.Screen
      name="Home"
      options={{ headerShown: false }}
      component={Home}
    />
  </Stack.Navigator>
);

export default mainNav;
