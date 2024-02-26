import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  }
};

const reset = routeName => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: routeName }],
      }),
    );
  }
};

export default {
  navigate,
  reset,
};
