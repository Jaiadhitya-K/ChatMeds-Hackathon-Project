import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colours from '../../Utils/Colours'

export default function Routine() {
  return (
    <View>
      <View style = {styles.subContainer1}>
        <View style = {styles.subContainer2}>
            <Text style ={{
                padding: 10,
                fontSize:30,
                fontWeight:'bold',
            }}>Daily Routine</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
    subContainer1:{
        width:'100%',
        backgroundColor: Colours.PRIMARY,
        height: 700,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding:10
    },
    subContainer2:{
        width:'100%',
        backgroundColor: Colours.WHITE,
        height: 700,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding:10
    }
})