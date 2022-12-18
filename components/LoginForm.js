import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import React, {useState} from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import client from '../api/client';
import {StackActions} from '@react-navigation/native';
const isValidObjField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 4000);
};

const isValidEmail = value => {
  const regx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regx.test(value);
};

const LoginForm = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const {email, password} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    //All field should have value
    if (!isValidObjField(userInfo)) {
      return updateError('All fields are required', setError);
    }
    // // if valid name with 3 or more charecters
    // if (!fullName.trim() || fullName.length < 3) {
    //   return updateError('Name must be longer than 3 charecters ', setError);
    // }
    //only valid email id alllowed
    if (!isValidEmail(email)) {
      return updateError('Invalid Email', setError);
    }
    // password must have 6 or more charecters
    if (!password.trim() || password.length < 5) {
      console.log('Hello');
      return updateError('Invalid Password', setError);
    }
    // password and confirm password must be same
    // if (password !== confirmPassword) {
    //   return updateError(
    //     'Passowrd and confirm password dont match',
    //     setError,
    //   );
    // }
    return true;
  };

  const submitForm = async () => {
    try {
      if (isValidForm()) {
        const res = await client.post('/signIn', {...userInfo});
        console.log(res.data.user);
        navigation.dispatch(
          StackActions.replace('Home', {
            token:res.data.token,
          }),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormContainer>
        {error ? (
          <Text style={{color: 'red', fontSize: 18, textAlign: 'center'}}>
            {error}
          </Text>
        ) : null}
        <FormInput
          autoCapitalize="none"
          title="Email"
          placeholder="example@email.com"
          value={email}
          onChangeText={value => handleOnChangeText(value, 'email')}
        />
        <FormInput
          autoCapitalize="none"
          title="Password"
          placeholder="*****"
          secureTextEntry
          value={password}
          onChangeText={value => handleOnChangeText(value, 'password')}
        />
        <FormSubmitBtn onPress={submitForm} title="Login" />
      </FormContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
