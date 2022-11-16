import {React, useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen2 from './screens/HomeScreen2';
import Daas from './screens/Daas';
import Relax from './screens/Relax';
import Thought from './screens/Thought';
import Daily from './screens/Daily';
import Reason from './screens/Reason';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import 'react-native-gesture-handler';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import SQLite from 'react-native-sqlite-storage';

global.db = SQLite.openDatabase(
  {
    name: 'sqlite',
    location: 'default',
    createFromLocation: '~sqlite.db',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="MusicPlayer" component={MusicPlayer} /> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Confirm email" component={ConfirmEmailScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Home" component={HomeScreen2} />
        <Stack.Screen name="Relax" component={Relax} />
        <Stack.Screen name="Daas" component={Daas} />
        <Stack.Screen name="Thought" component={Thought} />
        <Stack.Screen name="Daily" component={Daily} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
