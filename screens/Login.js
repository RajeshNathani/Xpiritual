import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/logo.png';
// import CustomInput from '../components/CustomInput';
// import CustomButton from '../components/CustomButton';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import FormHeader from '../components/FormHeader';
import FormSelectorBtn from '../components/FormSelectorBtn';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

import axios from 'axios';

const Login = ({navigation}) => {
  const fetchApi = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:8000');
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  });

  return (
    <View className=" flex-1 bg-orange-50">
      <View style={{alignItems: 'center'}}>
        <Image source={Logo} className="h-2/5" resizeMode="contain"></Image>
        <FormHeader
          leftHeading="Welcome"
          rightHeading="Back"
          subHeading="Have a great day"
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: -50}}>
        <FormSelectorBtn
          style={css.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
          title="Login"
        />
        <FormSelectorBtn
          styles={css.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
          title="Sign up"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <LoginForm navigation = {navigation}/>
        <ScrollView>
          <SignUpForm navigation = {navigation} />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const css = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },

  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default Login;
