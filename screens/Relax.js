import { View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
const Relax = () => {
    const navigation = useNavigation();
        useLayoutEffect(() => {
          navigation.setOptions({
              headerShown: false,
          });
        }, [])
    
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
  return (
    <SafeAreaView className="h-full w-full flex-1 bg-black">
        <StatusBar translucent backgroundColor="transparent" />
        <View className = "py-2 px-4 fixed top-0">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeftLong} onPress={() => navigation.navigate('Home')} />
                </TouchableOpacity>
        </View>
            {loading ? (
            <View className="bg-black flex-1 justify-center align-middle h-full w-full py-2" style={{height:'100%', flex:1}}>
                <ImageBackground source={require('../assets/butterfly.gif')} className="justify-center align-top">
                <Text className="text-white h-full">loading...</Text>
                </ImageBackground>
            </View>):(
            <View className="bg-black flex-1 justify-center align-middle h-full w-full py-2" style={{height:'100%', flex:1}}>
                <Text className="text-white">loading stopped</Text>
            </View>
            )}
    </SafeAreaView>
    
  )
}

export default Relax