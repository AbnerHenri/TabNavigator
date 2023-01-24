import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import TodayImage from '../Assets/TodayScreen.png'

function Today() {
  return(
    <View style={Styles.Container}>
        <Image source={TodayImage} style={Styles.Image}/>
        <Text style={Styles.Msg}>These are your tasks for the day</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container : {
    flex : 1,

    justifyContent : 'center',
    alignItems : 'center'
  },

  Image : {
    width : 250,
    height : 250,
  },

  Msg : {
    fontSize : 20,
    marginTop : 30
  }
})

export default Today;