import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={sty.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={sty.input}
        secureTextEntry={secureTextEntry}
        lab
      />
    </View>
  );
};

const sty = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: '#e8e8e8',
  },
});

export default CustomInput;
