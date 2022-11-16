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
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const onConfirmPressed = () => {
    console.warn('confirm pressed');
  };

  const onResendCodePress = () => {
    console.warn('Resend Code');
  };
  return (
    <ScrollView className="bg-orange-50">
      <View className=" flex-1 items-center justify-center p-8 ">
        <Text className="text-4xl my-12 ">Confirm Your Email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />
        <Pressable onPress={onResendCodePress}>
          <Text className='my-8 text-'>Resend Code</Text>
        </Pressable>
        <Pressable>
          <Text>Back to Register</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
