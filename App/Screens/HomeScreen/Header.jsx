import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colours from '../../Utils/Colours'



export default function Header() {
  return (
    <View>
        <View style = {styles.subContainer1}>
            <View style={styles.container}>
                <Text style ={{
                    fontWeight: 'bold',
                    fontSize: 50,
                    color: Colours.WHITE,
                    textAlign: "center",
                    marginTop:30,
                    marginBottom:20
                }}>ChatMeds</Text>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({ 
    subContainer1:{
        width:'100%',
        backgroundColor: Colours.PRIMARY,
        height: 230,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding:10,
        marginBottom:10,    },
    container: { 
        flex: 1, 

    } 
})
