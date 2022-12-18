import { StyleSheet, Text, KeyboardAvoidingView , Dimensions } from 'react-native'
import React from 'react'

const FormContainer = ({children}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>{children}</KeyboardAvoidingView>
  )
}

export default FormContainer

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    paddingHorizontal:20,
    width: Dimensions.get('window').width,
  },
});