import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {connect} from 'react-redux';

const RegisterScreen = (prop) => {

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor:"#fff",
      padding: 10
    }

  }
);


const mapStateToProps = state=>{
  return state;
}

export default connect(mapStateToProps)(RegisterScreen)