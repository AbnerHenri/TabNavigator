import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import TodayImage from '../Assets/Today.png'
import Done from '../Assets/Done.png'
import Todo from '../Assets/Todo.png'

function TabBar({ state, navigation }) {
  return(
    <View style={Styles.Container}>
        {state.routes.map((route, index)=> {

          const label = route.name

          function SourceImage(type) {
            switch (type) {
              case 'Done':
                return Done
              case 'ToDo':
                return Todo
            
              default:
                break;
            }
          }

          if(route.name == 'Today') {
            return(
              <TouchableOpacity
                key={index}
                style={Styles.TabToday}
                onPress={() => navigation.navigate(route.name)}
              >
                <View style={Styles.ContainerTab}>
                  <Image source={TodayImage} style={{ width: 40, height: 40 }} />
                  <Text style={{ color : '#FFF' }}>{label}</Text>
                </View>
              </TouchableOpacity>
            )
          }else{
            return(
              <TouchableOpacity
                key={index}
                style={Styles.Tab}
                onPress={() => navigation.navigate(route.name)}
              >
                <>
                  <Image source={SourceImage(route.name)} style={{ width: 30, height: 30 }} />
                  <Text>{label}</Text>
                </>
              </TouchableOpacity>
            )
          }
        })}
    </View>
  );
}

const Styles = StyleSheet.create({
  Container : {
    flexDirection : 'row',

    height : 55,
  },
  TabToday : {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    transform : [{ translateY : -20 }]
  },  
  ContainerTab : {
    width : 85,
    height : 85,

    justifyContent : 'center',
    alignItems : 'center',

    borderRadius : 50,
    backgroundColor: '#8FBC8F',
  },
  Tab : {
    flex : 1,
    
    justifyContent : 'center',
    alignItems : 'center',
  }
})

export default TabBar;