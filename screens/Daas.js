import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import React , {useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
import SegmentedControlTab from "react-native-segmented-control-tab";
import daas from '../daas.json';
const Daas = () => {
    
    const navigation = useNavigation();
        useLayoutEffect(() => {
          navigation.setOptions({
              headerShown: false,
          });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [array, setArray] = useState([]);
    const [question1, setQuestion1] = useState(0);
    const [question2, setQuestion2] = useState(0);
    const [question3, setQuestion3] = useState(0);
    const [question4, setQuestion4] = useState(0);
    const [question5, setQuestion5] = useState(0);
    const [question6, setQuestion6] = useState(0);
    const [question7, setQuestion7] = useState(0);
    const [question8, setQuestion8] = useState(0);
    const [question9, setQuestion9] = useState(0);
    const [question10, setQuestion10] = useState(0);
    const [question11, setQuestion11] = useState(0);
    const [question12, setQuestion12] = useState(0);
    const [question13, setQuestion13] = useState(0);
    const [question14, setQuestion14] = useState(0);
    const [question15, setQuestion15] = useState(0);
    const [question16, setQuestion16] = useState(0);
    const [question17, setQuestion17] = useState(0);
    const [question18, setQuestion18] = useState(0);
    const [question19, setQuestion19] = useState(0);
    const [question20, setQuestion20] = useState(0);
    const [question21, setQuestion21] = useState(0);

    const [depression, setDepression] = useState(0);
    const [anxiety, setAnxiety] = useState(0);
    const [stress, setStress] = useState(0);

    return (
    <SafeAreaView className="bg-orange-50 h-full">
        <ScrollView>
            <View className = "py-2 px-4 fixed top-0">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeftLong} onPress={() => navigation.navigate('Home')} />
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-2xl text-center font-bold italic py-4 text-black">Depression Anxiety Stress Scale</Text>
            </View>
            <View>
                <Text className="text-xl text-center font-bold italic py-4 text-black">Over the last 2 weeks, how often have you been bothered by any of the following problems?</Text>
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black">I found it difficult to work up the initiative to do things.</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question1} onTabPress={(index)=>{setQuestion1(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black">I felt that I had nothing to look forward to.</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question2} onTabPress={(index)=>{setQuestion2(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black">I couldn't seem to experience any positive feeling at all</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question3} onTabPress={(index)=>{setQuestion3(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black">I felt down-hearted and blue</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question4} onTabPress={(index)=>{setQuestion4(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black"> I was unable to become enthusiastic about anything.</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question5} onTabPress={(index)=>{setQuestion5(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black">I felt that life was meaningless</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question6} onTabPress={(index)=>{setQuestion6(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
                <Text className="font-bold py-1 text-lg text-black"> I felt I wasn't worth much as a person</Text>
                <SegmentedControlTab activeTabStyle={{backgroundColor:'#ffa500'}} className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]} selectedIndex={question7} onTabPress={(index)=>{setQuestion7(index)}} />
            </View>
            <View className="text-white flex-col w-full px-4 py-2 m-auto">
            {daas.map((item, i) => {
                return <>
                 <Text className="font-bold py-1 text-lg text-black">{item.question}</Text>
                 <SegmentedControlTab  activeTabStyle={{backgroundColor:'#ffa500'}} 
                    className="w-4/5 py-1" values={["Never(0)", "Sometimes(1)", "Often(2)", "Always(3)"]}
                   onTabPress={(index)=>{setArray([...array, array[item.id] = index]),  console.log(array)}} selectedIndex={array[item.id]} />
                </>
            })}
            </View>
            <View className="px-4">
                <Button title="Submit" className="px-4 w-1/2 mx-auto" onPress={() =>{console.log(array)}} />
            </View>
            <View className="px-4 py-2">
                <Text className="font-bold text-xl">Depression: {depression}</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Daas