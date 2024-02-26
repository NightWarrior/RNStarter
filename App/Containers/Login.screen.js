import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './Login.styles';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '../Redux/UserRedux';
import { loading as userLoading } from '../Selectors/User';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(userLoading);
  const passRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    console.log({ inLogin: true, username, password });
    dispatch(UserActions.login(username, password));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.titleText}>MyApp</Text>
        <TextInput
          label="Username"
          style={styles.textInput}
          mode={'outlined'}
          value={username}
          onChangeText={text => setUsername(text)}
          onSubmitEditing={() => passRef?.current?.focus()}
        />
        <TextInput
          ref={passRef}
          label="Password"
          style={styles.textInput}
          mode={'outlined'}
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={doLogin}
        />
        <Button style={styles.button} mode="contained" onPress={doLogin}>
          Login
        </Button>
        {loading && (
          <ActivityIndicator
            size={'large'}
            animating={loading}
            style={styles.loading}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
