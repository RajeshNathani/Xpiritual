import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';
import Sidemenu from '../components/Sidemenu';
import data from '../data/homescreen';
import {View, Text, SafeAreaView, ScrollView, Image, TextInput, ImageBackground, Button, TouchableOpacity, FlatList} from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      });
    }, [])
  return (
    <SafeAreaView className="bg-zinc-900">
        <ScrollView>
              <View className="font-sans">
              <View className="flex-row py-4 mb-4 items-center justify-center align-center px-4 w-full">
                  <View className="w-1/2">
                      <FontAwesomeIcon icon={ faBarsStaggered } size={20} className="w-1/2" color="gray" />
                  </View>
                  <View className="w-1/2 items-end">
                          <FontAwesomeIcon icon={ faCircleUser } size={20} className="w-1/2" color="black" />
                  </View>
              </View>
              </View>
              <Text className="px-4 py-1 text-3xl text-white font-bold tracking-wide">Good Morning, Rajesh</Text>
              <Text className="px-4 py-1 text-sm text-gray-500 font-bold tracking-wide">We Wish you a good day</Text>
        <View className="px-4 py-2">
            <TextInput className="border-2 m-auto w-full px-2 py-2 border-gray-200 appearance-none bg-white rounded-lg text-md text-gray-500 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Search Activity" placeholderTextColor="#808080" />
        </View>
        <Text className="px-4 py-4 font-bold text-xl text-white">For You</Text>
       
        <View className="flex-row justify-center m-auto px-12 space-x-4 align-middle h-44 ">
            <View className="flex shadow-inner bg-white rounded-xl w-2/4 h-40 justify-center align-middle" style={{ blur:20 }}>
                <Image source={require('../assets/meditationB.png')} className="w-3/5 -my-4 mx-auto h-4/5 rounded-md" />
                <Text className="text-black px-4 text-lg text-center font-bold">Meditation</Text>
                <TouchableOpacity className="bg-violet-200 align-middle w-1/2 h-6 justify-center px-4 mx-auto">
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>
            <View className="flex shadow-inner bg-white rounded-xl w-2/4 h-40 justify-center align-middle" style={{ blur:20 }}>
                <Image source={require('../assets/sleepB.png')} className="w-3/5 -my-4 mx-auto h-4/5 rounded-md" />
                <Text className="text-black px-4 text-lg text-center font-bold">Meditation</Text>
                <TouchableOpacity className="bg-violet-200 align-middle w-1/2 h-6 justify-center px-4 mx-auto">
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="flex-row justify-center m-auto px-12 space-x-4 align-middle h-44 ">
            <View className="flex shadow-inner bg-white rounded-xl w-2/4 h-40 justify-center align-middle" style={{ blur:20 }}>
                <Image source={require('../assets/relaxB.png')} className="w-3/5 -my-4 mx-auto h-4/5 rounded-md" />
                <Text className="text-black px-4 text-lg text-center font-bold">Meditation</Text>
                <TouchableOpacity className="bg-violet-200 align-middle w-1/2 h-6 justify-center px-4 mx-auto">
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>
            <View className="flex shadow-inner bg-white rounded-xl w-2/4 h-40 justify-center align-middle" style={{ blur:20 }}>
                <Image source={require('../assets/diaryB.png')} className="w-3/5 -my-4 mx-auto h-4/5 rounded-md" />
                <Text className="text-black px-4 text-lg text-center font-bold">Meditation</Text>
                <TouchableOpacity className="bg-violet-200 align-middle w-1/2 h-6 justify-center px-4 mx-auto">
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen