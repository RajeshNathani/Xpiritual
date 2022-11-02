import { View, Text, SafeAreaView, ImageBackground, Share, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowUpFromBracket';

const Thought = () => {
    const [thought, setThought] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState()
    useEffect(() => {
        fetch('https://quotes.rest/qod.json')
            .then(res => res.json())
            .then(data => {
                setThought(data.contents.quotes[0].quote)
                setAuthor(data.contents.quotes[0].author)
                setImage(data.contents.quotes[0].background)
            })
    }, [])
    const navigation = useNavigation();
        useLayoutEffect(() => {
          navigation.setOptions({
              headerShown: false,
          });
        }, [])
    const onShare = async () => {
        try {
          const result = await Share.share({
            message: `${thought} - ${author} This Thought is Shared via Xpiritual`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
  return (
    <SafeAreaView style={{flex: 1}} className="h-full">
        <ImageBackground source={{uri: image}} className="h-full justify-center  align-middle ">
        <View className="flex-col py-4 backdrop-grayscale bg-black/60 m-auto h-full w-full px-4">
                {thought.length>0?(
                    <>
                        <View className="flex-col py-4 w-full bg-white/30 rounded-xl justify-center mx-auto px-6">
                        <FontAwesomeIcon icon={faQuoteLeft} size={20} color="black" className="mb-4 float-left w-1/5"/>
                        <Text className="text-3xl text-white text-justify font-semibold italic w-4/5">
                           {thought}
                           
                        </Text>
                        <Text className="text-black font-bold text-lg py-2 italic">{author}</Text>
                        </View>
                        <View className="flex-row w-full px-8 mt-72">
                            <View className="w-1/2 items-start">
                                <FontAwesomeIcon className="hover:text-red-500" icon={faHeart} size={40} color="white"/>
                            </View>
                            <View className="w-1/2 items-end">
                            <TouchableOpacity onPress={onShare}>
                                <FontAwesomeIcon className="" icon={faArrowUpFromBracket} size={40} color="white"/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </>
                ):(
                        <Text>Loading...</Text>
                )}
        <View>
        </View>
        </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

export default Thought