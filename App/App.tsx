import './Config';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRouter from './Navigation/Navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import createStore from './Redux';
import {isReadyRef, navigationRef} from './Navigation/NavigationService';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const store = createStore();

const App = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => (isReadyRef.current = true)}>
          <NavigationRouter />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
