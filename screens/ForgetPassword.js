import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/logo.png';
import styles from 'react-native-animated-segment-control/src/SegmentControl/styles';
import {height} from '@fortawesome/free-solid-svg-icons/faCircleUser';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ConfirmEmailScreen = () => {
  const [name, setName] = useState('');
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

  const onRegisterPressed = ()=>{
    navigation.navigate('SignUp')
    console.warn('Register')
  }
  return (
    <ScrollView className="bg-orange-50 p-4">
      <View className=" flex-1 items-center justify-center">
        <Text className="text-4xl mt-16 mb-8">Reset Password</Text>
        <CustomInput
          placeholder="Enter your username"
          value={name}
          setValue={setName}
        />
        <CustomButton text="Send" onPress={onSendPressed} />
        <Pressable
        onPress={onRegisterPressed}>
          <Text className="text-base my-8">Back to Register</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
