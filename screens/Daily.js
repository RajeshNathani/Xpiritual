import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons/faLessThan';

const Daily = () => {
    const navigation = useNavigation();
        useLayoutEffect(() => {
            navigation.setOptions({
                headerShown: false,
            });
        }, [])

  const [week, setWeek] = useState(1)
  const [day, setDay] = useState(1)
  const weeklyTask = ['SAVORING' , 'RANDOM ACTS OF KINDNESS', 'EXERCISE', 'MEDITATION']
  const desc = [`Savoring is the act of stepping outside of an experience to review and appreciate it. Savoring intensifies and lengthens the positive emotions that come with doing something you love. This week, practice the art of savoring by picking one experience to truly savor each day. It could be a nice shower, a delicious meal, a great walk outside, or any experience that you really enjoy. When you take part in this savored experience, be sure to practice some common techniques that enhance savoring. These techniques include: sharing the experience with another person, thinking about how lucky you are to enjoy such an amazing moment, keeping a souvenir or photo of that activity, and making sure you stay in the present moment the entire time.`,
                `Research shows that happy people are motivated to do kind things for others. Over the next seven days, try to perform seven acts of kindness beyond what you normally do. You can do one extra act of kindness per day, or you can do a few acts of kindness in a single day. These do not have to be over-the-top or time-intensive acts, but they should be something that really helps or impacts another person. For example, help your colleague with something, give a few dollars or some time to a cause you believe in, say something kind to a stranger, write a thank you note, give blood, and so on. At the end of each day, list your random act of kindness. Just make sure you've finished seven total new acts of kindness by the end of the week.`,
            `Research suggests that ~30 minutes a day of exercise can boost your mood in addition to making your body healthier. For the next week, you will spend each day getting your body moving with at least 30 minutes of exercise. Set aside a location and time (write it in your calendar!). Then hit the treadmill at the gym, do an online yoga class, or throw on some headphones and dance around your room to cheesy pop songs. This isn’t supposed to be a marathon-level of activity; it’s just to get your body moving a bit more than usual (Note: if you have physical limitations that prevent you from doing this weeks activity, do plan to skip it for obvious reasons). Be sure to take a moment to notice how much better you feel after getting some exercise in.`,
        `Meditation is a practice of intentionally turning your attention away from distracting thoughts toward a single point of reference (e.g., the breath, bodily sensations, compassion, a specific thought, etc.). Research shows that meditation can have a number of positive benefits, including more positive moods, increased concentration, and more feelings of social connection. For the next week, you will spend each (at least) 10 minutes per day meditating. Find a quiet spot where you won’t be disturbed while you’re meditating. If you are new to meditation, you can try one of three guided meditations available on SoundCloud. And remember— meditation isn’t about the meditation itself; it’s about building a skill that we can use later. Lots of people find it hard at first, but stick with it and see if it allows you to feel a bit calmer over the course of the week. At the end of the day, log when and how long you meditated in your preferred tracking system.`]
  return (
    <SafeAreaView style={{flex: 1}} className="h-full bg-orange-50">
        <View className="flex-col h-full w-full">
            <View className="bg-orange-50 h-60">
                <View className="flex-row justify-between px-4 py-4">
                <FontAwesomeIcon icon={faLessThan}></FontAwesomeIcon>
                </View>
                <Text className="text-2xl font-semibold text-black px-4">Today's <Text className="text-gray-500 font-normal">Task</Text></Text>
            </View>
            <View className="bg-white h-full rounded-t-3xl">
                <View className="flex-row justify-center">
                    <TouchableOpacity className="focus:bg-black hover:bg-yellow-100">
                        <Text className="text-lg text-black py-4 px-4" onPress={()=>{setWeek(1)}}>Week 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="focus:bg-black hover:bg-yellow-100">
                        <Text className="text-lg text-black py-4 px-4" onPress={()=>{setWeek(2)}}>Week 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="focus:bg-black hover:bg-yellow-100">
                        <Text className="text-lg text-black py-4 px-4" onPress={()=>{setWeek(3)}}>Week 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="focus:bg-black hover:bg-yellow-100">
                        <Text className="text-lg text-black py-4 px-4" onPress={()=>{setWeek(4)}}>Week 4</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex">
                    <Text className="px-10 text-2xl italic font-medium">
                        {weeklyTask[week-1]}
                    </Text>
                    <Text className="px-10 py-2  text-black">
                        {desc[week-1]}
                    </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Daily













