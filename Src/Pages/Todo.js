import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import TodoImage from '../Assets/TodoScreen.png'

function Todo() {
  return(
    <View style={Styles.Container}>
      <Image source={TodoImage} style={Styles.Image} />
      <Text style={Styles.Msg}>These are your future tasks</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center'
  },

  Image: {
    width: 250,
    height: 250,
  },

  Msg: {
    fontSize: 20,
    marginTop: 30,
  }
})

export default Todo;