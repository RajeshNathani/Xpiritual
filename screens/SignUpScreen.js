import {View, Text, Image, StyleSheet,ScrollView,Pressable} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import  SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name:'Xpirtual',
    location:'default'
  },
  ()=>{},
  error =>{console.log(error);}
)

const SignUpScreen = () => {
     const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  
const [username , setUsername] = useState('');
const [email , setEmail] = useState('');
const [ password, setPassword] = useState('');
const [passwordRepeat , setPasswordRepeat] = useState('');

  useEffect(()=>{
    createTable();
  })

  const createTable = ()=>{
    db.transaction((txn)=>{

      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS"
        +"Users"
        +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT , Email TEXT ,Password TEXT, Score INT default(0));"

      )
    })
  }

  const authenticateUser = () =>{
    db.transaction((txn)=>{
      txn.executeSql(
        "SELECT * from Users",
        [],
        (sqlTxn , res)=>{
          console.log(sqlTxn)
          console.log(res)
        },
        error=>{console.log(error);}

      )
    })
  }

const setData = async ()=>{
  if(username.length === 0 || email.length === 0 || password.length === 0 || passwordRepeat.length === 0 || password !== passwordRepeat){
    alert("Please enter correct details");
  }
  else{
    try{
     await db.transaction(async (txn)=>{

       await txn.executeSql(
          "INSERT INTO Users (Name , Email , Password , Score) VALUE(?,?,?,?)",
          [username,email,password]

        )
      })
      // navigation.navigate('Home')
    }catch{

    }
  }
}

const onSignInPress = ()=>{
  navigation.navigate('SignIn')
  console.warn('Sign in')
}



  return (
    <ScrollView className=' bg-orange-50 content-center'>

        <View className='items-center my-8'>
            <Text className='text-4xl font-bold my-9 text-zinc-800'>Create Account</Text>
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
          <CustomButton text="Register" onPress={setData}/>
          <CustomButton text="Login" onPress = {authenticateUser}/>
        </View>
      <Pressable className='items-center'
      onPress={onSignInPress}>
       <Text className='items-center'>Already Have an account? Sign in </Text> 
        </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    
})

export default SignUpScreen