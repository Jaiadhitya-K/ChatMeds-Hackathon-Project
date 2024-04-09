import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colours from '../../Utils/Colours'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style = {{alignItems:"center"}}>
        <Image source = {require('./../../../assets/images/LoginScreenBG.png')}
            style = {styles.loginImage}
        />
        <View style = {styles.subContainer}>
            <Text style = {{fontSize:27,color: Colours.WHITE,
                textAlign:'center'}}>
                Let Us 
                <Text style = {{fontWeight: 'bold'}}> Streamline and Simplify Healthcare
                </Text> Tasks
            </Text>
            <Text style = {{fontSize:17, color: Colours.WHITE,
            textAlign:'center', marginTop: 20}}>Best App to manage your prescriptions and track your Medication</Text>
            
            <TouchableOpacity style = {styles.button} 
            onPress={onPress}>
                <Text style = {{textAlign:'center',
                fontSize:17, color: Colours.PRIMARY}}>Let's Get Started</Text>
            </TouchableOpacity>        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width: 230,
        height: 450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colours.BLACK,
        borderRadius:15,
    },
    subContainer:{
        width:'100%',
        backgroundColor: Colours.PRIMARY,
        height: "70%",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor: Colours.WHITE,
        borderRadius:99,
        marginTop:40
    }
})
