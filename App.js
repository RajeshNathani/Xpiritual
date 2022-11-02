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
import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
