/* eslint-disable prettier/prettier */

import {View, Text, SafeAreaView, ScrollView, Image, TextInput, ImageBackground, Button, TouchableOpacity, FlatList} from 'react-native';
import React, { useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';
import BottomSheet from '@gorhom/bottom-sheet';

const HomeScreen2 = () => {
        const navigation = useNavigation();
        useLayoutEffect(() => {
          navigation.setOptions({
              headerShown: false,
          });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '75%'], []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handleClosePress = () => bottomSheetRef.current.close()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#FAF7F2'}}>
        <ScrollView style={{flex: 1, backgroundColor:'#FAF7F2'}} horizontal="true">
    <View className="font-sans">
        <View className="flex-row py-4 mb-4 items-center justify-center align-center px-4 w-full">
            <View className="w-1/2">
                <FontAwesomeIcon icon={ faBarsStaggered } size={20} className="w-1/2" color="gray" />
            </View>
            <View className="w-1/2 items-end">
                    <FontAwesomeIcon icon={ faCircleUser } size={20} className="w-1/2" color="green" />
            </View>
        </View>
            <Text className="px-4 py-1 text-3xl text-black font-bold tracking-wide">Good Morning</Text>
            <Text className="px-4 py-2 text-sm text-gray-400 font-bold tracking-wide">We Wish you a good day</Text>
        <View className="px-4">
            <TextInput className="border-2 m-auto w-full px-3 py-2 border-gray-200 appearance-none bg-white rounded-full text-md text-gray-500 placeholder-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Search Activity" placeholderTextColor="#808080" />
        </View>
        <Text className="px-4 py-4 font-bold text-xl text-black">For You</Text>
       
        <View className="flex-row justify-center m-auto px-8 space-x-4 align-middle h-44 ">
            <View className="flex shadow-inner bg-violet-300 rounded-xl w-2/4 h-full justify-center align-middle" style={{ blur:20 }}>
                <Image source={require('../assets/meditation3d.png')} className="w-3/5 -my-4 mx-auto h-4/5 rounded-md" />
                <Text className="text-white px-4 text-lg text-center font-bold">Meditation</Text>
                <TouchableOpacity className="bg-violet-200 align-middle w-1/2 h-6 justify-center px-4 mx-auto">
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>

            <View className="flex shadow-inner bg-sky-200 rounded-xl justify-center align-middle w-2/4 h-full" style={{ blur:20 }}>
                <Image source={require('../assets/sleep3d.png')} className="w-4/5 h-3/5 mx-auto" />
                <Text className="text-white px-4 text-lg font-bold mx-auto">Sleep</Text>
                <TouchableOpacity className="bg-sky-100 w-1/2 h-6 justify-center px-4 mx-auto" onPress={()=>{navigation.navigate('Meditation')}}>
                    <Text className="text-center text-black text-md font-bold rounded-full">Start</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{width:'90%'}} className="m-auto py-2 rounded-md">
            <TouchableOpacity className="bg-green-300 w-full m-auto h-16 align-middle rounded-xl flex-row" onPress={()=>{navigation.navigate('Thought')}}>
                <Text className="px-4 py-4 font-bold text-xl  text-white items-start">Today's Thought</Text>
                <Image source={require('../assets/chat.png')} className="w-2/5 h-4/5 m-auto mx-16 items-end" />
            </TouchableOpacity>
        </View>
        <View>
            <Text className="px-4 font-bold text-xl text-black py-2">Meditation</Text>
            <View className="flex-row px-6 space-x-4 w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
                <View className="px-2 rounded-xl h-16 justify-start w-1/4 bg-orange-200">
                    <Image source={require('../assets/relax3d.png')} className="w-16 h-12 m-auto" />
                </View>
                <View className="flex-col w-2/4 px-2 justify-center text-start align-start items-start h-16">
                    <Text className="text-black text-center text-xl font-bold">Relaxation</Text>
                    <Text className="text-gray-500 text-center text-sm ">Meditation 3-5 mins</Text>
                </View>
                <View className="w-1/4 px-2">
                    <FontAwesomeIcon icon={ faPlayCircle } size={48} className="rounded-full" style={{shadowColor:'black', borderRadius:360, shadowOpacity:0, textShadowRadius:10, elevation:10, textShadowOffset:{width:5, height:2}}}  color="orange"/>
                </View>
            </View>
            <View className="flex-row px-6 py-3 space-x-4 w-full">
                <View className="px-4 rounded-xl h-16 justify-start bg-sky-200 w-1/4">
                    <Image source={require('../assets/focus3d.png')} className="w-16 h-full m-auto" />
                </View>
                <View className="flex-col w-2/4 px-2 justify-center text-start align-start items-start h-16">
                    <Text className="text-black text-center text-xl font-bold">Focus</Text>
                    <Text className="text-gray-500 text-center text-sm ">Meditation 3-5 mins</Text>
                </View>
                <View className="w-1/4 px-2">
                    <FontAwesomeIcon icon={ faPlayCircle } size={48}  color="skyblue"/>
                </View>
            </View>
            <View className="flex-row px-6 space-x-4 w-full">
                <View className="px-2 rounded-xl h-16 justify-start w-1/4 bg-green-200">
                    <Image source={require('../assets/plant.png')} className="w-16 h-full m-auto" />
                </View>
                <View className="flex-col w-2/4 px-2 justify-center text-start align-start items-start h-16">
                    <Text className="text-black text-center text-xl font-bold">Greenery</Text>
                    <Text className="text-gray-500 text-center text-sm ">Meditation 3-5 mins</Text>
                </View>
                <View className="w-1/4 px-2">
                    <FontAwesomeIcon icon={ faPlayCircle } size={48}  color="lightgreen"/>
                </View>
            </View>
            <Text>{'\n'}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Daas')} style={{width:'94%'}} className="bg-sky-300 px-2 h-14 justify-center mx-auto rounded-lg">
                <Text className="px-4 font-bold text-xl text-white py-2">Depression, Anxiety and Stress Scale</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Daas')} style={{width:'94%'}} className="bg-orange-300 my-3 px-2 h-14 justify-center mx-auto rounded-lg">
                <Text className="px-4 font-bold text-xl text-white py-2">Progress Tracker</Text>
            </TouchableOpacity>        
        </View>
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            className="flex-1"
            enablePanDownToClose={true}
            animateOnMount={true}
        >  
            <View className="flex-1 px-4 -scroll-my-20 bg-slate-300 rounded-xl align-middle text-center">
                <Text className="text-xl justify-center h-56 my-6 font-bold text-black">Hello Rajesh, Welcome! {'\n\n'}First we would like to take a quick survey to know you better{'\n'}
                    {'\n'}
                    So that we can personalize the content according to your needs
                </Text>
                <TouchableOpacity className="bg-yellow-500 justify-center align-middle w-full my-4 h-16 rounded-xl flex-row" onPress={()=>{navigation.navigate('Daas')}}>
                    <Text className="px-4 py-4 font-bold text-xl w-1/2 text-center text-white items-start">Let's Begin</Text>
                </TouchableOpacity>
                <TouchableOpacity className="justify-center" onPress={()=>{handleClosePress()}}>
                    <Text className="font-bold text-sm  text-gray text-center">Skip</Text>
                </TouchableOpacity>
            </View>
      </BottomSheet>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen2;
