import {View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import  SQLite from 'react-native-sqlite-storage';



const db = SQLite.openDatabase(
  {
    name:'sqlite.db',
   location:'default',
    createFromLocation:1
  },
  ()=>{},
  error =>{console.log(error);}
)


const SignInScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const [username , setUserName ]=useState('');
  const [password , setPassword] = useState('');


  
  const onSignInPressed = ()=>{
    console.warn('SIGN IN')

    //Validate user

    navigation.navigate('Home')
  }

  const onForgotPassWordPressed =()=>{
    console.warn('Forgot Password')
    navigation.navigate('ForgetPassword')
  }

  const onDontHaveAccPressed = ()=>{
    console.warn('onDonthaave account')
    navigation.navigate('SignUp')
  }
  return (
    
    <View  className=' flex-1 items-center -my-5  bg-orange-50'>
      
    <Image source={Logo} style={css.Logo} className='h-2/4' resizeMode="contain"></Image>

      <View className='items-center w-10/12 -m-24'>
        <CustomInput 
          placeholder="UserName" 
          value={username} 
          setValue={setUserName} 
          secureTextEntry={false}
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword} 
          secureTextEntry={true}
        />
        <CustomButton 
          text="Login" 
          onPress={authenticateUser} 
        />

        <Pressable  onPress={onForgotPassWordPressed}>
          <Text>Forgot Password ?</Text>
        </Pressable>

        <Pressable onPress={onDontHaveAccPressed}>
          <Text  className='my-12'>Dont have an account ? Create One</Text>
        </Pressable>

      </View>
    </View>
  );
};

const css = StyleSheet.create({
    root:{
        alignItems:'center',
        justifyContent:'center',

    },
})

export default SignInScreen;
