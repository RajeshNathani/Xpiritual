import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FormHeader = ({leftHeading , rightHeading , subHeading}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{leftHeading} {' '}</Text>
        {/* <Text style={styles.heading}>{rightHeading}</Text> */}
      </View>
      <Text style={{fontSize: 18, color: '#1b1b33'}}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-20,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1b1b33',
    // marginBottom:20
  },
});

export default FormHeader;
