import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'

const Meditation = () => {
  return (
    <SafeAreaView className="h-full">
        <View className="flex-1 h-full" style={{height:'100%', flex:1}}>
        <ImageBackground source={require('../assets/meditation_page.png')} className="h-fit align-top">
        </ImageBackground>
        </View>
    </SafeAreaView>
  )
}

export default Meditation