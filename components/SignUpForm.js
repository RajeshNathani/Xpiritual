import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';
import { StackActions } from '@react-navigation/native';

import client from '../api/client';


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

const SignUpForm = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const {fullName, email, password, confirmPassword} = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});

    // console.log(userInfo);
  };

  const isValidForm = () => {
    //All field should have value
    if (!isValidObjField(userInfo)) {
      return updateError('All fields are required', setError);
    }
    // if valid name with 3 or more charecters
    if (!fullName.trim() || fullName.length < 3) {
      return updateError('Name must be longer than 3 charecters ', setError);
    }
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
    if (password !== confirmPassword) {
      return updateError('Passowrd and confirm password dont match', setError);
    }
    return true
  };

  const submitForm = async () => {
    if (isValidForm()) {
      //submitForm
      const res = await client.post('/RegisterUser', {...userInfo});

      console.log(res);
      // console.log(userInfo);
      const email = res.data.user.email;
      const password = userInfo.password;
      // console.log(email);
      // console.log(password);
      console.log(res.data.success);
      if (res.data.success) {
        console.log('Hello Success');
        const signInRes = await client.post('/signIn', {
          email: email,
          password: password,
        });
        // console.log(password);
        // console.log(signInRes.data.success);
        if (signInRes.data.success) {
          // console.log('Hello');
          navigation.dispatch(
            StackActions.replace('Home', {
              token: signInRes.data.token,
            }),
          );
        }
      }
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
          value={fullName}
          onChangeText={value => {
            handleOnChangeText(value, 'fullName');
          }}
          title="Full Name"
          placeholder="Enter your name "
        />
        <FormInput
          value={email}
          onChangeText={value => {
            handleOnChangeText(value, 'email');
          }}
          autoCapitilize="none"
          title="Email"
          placeholder="example@emaiil.com"
        />
        <FormInput
          value={password}
          onChangeText={value => {
            handleOnChangeText(value, 'password');
          }}
          autoCapitilize="none"
          title="Password"
          placeholder="*****"
          secureTextEntry
        />
        <FormInput
          value={confirmPassword}
          onChangeText={value => {
            handleOnChangeText(value, 'confirmPassword');
          }}
          autoCapitilize="none"
          title="ConfirmPassword"
          placeholder="*****"
          secureTextEntry
        />
        <FormSubmitBtn onPress={submitForm} title="Register" />
      </FormContainer>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
