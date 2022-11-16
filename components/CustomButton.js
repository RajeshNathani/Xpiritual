import { View, Text , StyleSheet,Pressable,TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD580',
    width:'40%',
    padding:15,
    marginVertical:20,
    alignItems:'center',
    borderRadius:20
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  },
});

export default CustomButton