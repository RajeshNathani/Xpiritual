import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ConfirmEmailScreen = () => {
  const [password, setPassword] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const onSendPressed = () => {
    console.warn('confirm pressed');
  };

  const onResendCodePress = () => {
    console.warn('Resend Code');
  };
  const onRegisterPressed = () => {
    console.warn('Register Pressed');
  };
  return (
    <ScrollView className="bg-orange-50 p-4">
      <View className=" flex-1 items-center justify-center">
        <Text className="text-4xl mt-16 mb-8">Reset Password</Text>
        <CustomInput
          placeholder="Enter New Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Your password"
          value={resetPassword}
          setValue={setResetPassword}
          secureTextEntry
        />
        <CustomButton text="Submit" onPress={onSendPressed} />
        <Pressable onPress={onRegisterPressed}>
          <Text className="text-base my-8">Back to Register</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
