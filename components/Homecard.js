/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';

const Homecard = ({color, title, image}) => {
  const images = {
    perma: require('../assets/perma.png'),
    sound: require('../assets/sound.png'),
    chat: require('../assets/chat.png'),
    diary: require('../assets/diary.png'),
  }
  return (
      <View className="flex-row justify-center align-middle">
        <View className="flex-col shadow-xl bg-white rounded-md">
          <View className={`flex-row justify-center align-middle px-4 py-4 my-2 mx-auto bg-${color}-200`}>
            <Image source={images[image]} className="w-10 h-10"/>
          </View>
          <Text className="text-black bold mx-auto px-4 py-2 font-bold">
            {title}, {color}, {image}
          </Text>
        </View>
    </View>
  );
};

export default Homecard;
