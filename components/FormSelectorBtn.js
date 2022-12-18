import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React from 'react';

const FormSelectorBtn = ({style,backgroundColor,title}) => {
  return (
    <>
      <TouchableWithoutFeedback>
        <View style={[Styles.container,{backgroundColor:backgroundColor},style]}>
          <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: 45,
    width: '50%',
     marginTop: -90,
  //  marginBottom:30,
    backgroundColor: '#1b1b33',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormSelectorBtn;
