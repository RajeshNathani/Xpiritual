import { View, Text, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import useSound from "react-native-use-sound";

const MusicLight = () => {
    const coolMusic =
    "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3";
  const [play, pause, stop, data] = useSound(coolMusic);

  const handlePlay = () => {
    if (data.isPlaying) pause();
    else play();
  
};
  return (
    <View>
      <View className="px-2 py-2">
        <Text>Music Player</Text>
      </View>
    <Button title='Play' onPress={()=>{handlePlay()}}/>
    </View>
  )
}

export default MusicLight