import { View, Text, Button, SafeAreaView, Image, ImageBackground, ScrollView, Dimensions, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import * as yup from 'yup';
import { Formik } from 'formik';

const Meditation = () => {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");
  return (
    <SafeAreaView>
        <ScrollView>
            <View className="h-100">
            <ImageBackground source={require('../assets/meditation_page.png')} style={{width:'100%', height:'100%'}} imageStyle={{resizeMode:'stretch', height:window.height}} className="h-full">
            <View style={{height:window.height+20}}>
            <TouchableOpacity className="mt-80 py-2">
                <Text className="mx-auto mt-80 bg-blue-400 px-6 py-2 rounded-lg fixed text-white">Set Alarm</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Meditation