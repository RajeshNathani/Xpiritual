import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Reason = () => {
    const navigation = useNavigation();
        useLayoutEffect(() => {
          navigation.setOptions({
              headerShown: false,
          });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <SafeAreaView className="h-full">
        <View className="justify-center align-middle text-center w-full h-48">
            <Text className="text-center text-black text-lg">Welcome</Text>
            <Text className="text-center justify-center font-medium text-3xl text-black">WHAT BRINGS {'\n'} YOU HERE</Text>
        </View>
        <View className="justify-center gap-2 flex-row align-middle text-center w-full h-full">
            <View className="w-40 border-2 px-4 border-slate-300 h-40 flex justify-center align-middle">
                <Text className="text-center text-black text-lg">Focus</Text>
            </View>
            <View className="w-40 border-2 px-4 border-slate-300 h-40 flex justify-center align-middle">
                <Text className="text-center text-black text-lg">Focus</Text>
            </View>
        </View>
        <Text>{'\n'}</Text>
        <View className="justify-center gap-2 flex-row align-middle text-center w-full h-full">
            <View className="w-40 border-2 px-4 border-slate-300 h-40 flex justify-center align-middle">
                <Text className="text-center text-black text-lg">Focus</Text>
            </View>
            <View className="w-40 border-2 px-4 border-slate-300 h-40 flex justify-center align-middle">
                <Text className="text-center text-black text-lg">Focus</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Reason