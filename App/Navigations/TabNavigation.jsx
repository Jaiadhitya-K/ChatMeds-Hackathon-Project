import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import PrescriptionsScreen from '../Screens/PrescriptionsScreen/PrescriptionsScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Colours from '../Utils/Colours';


const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colours.PRIMARY
    }}>
        <Tab.Screen name='home' component={HomeScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7}}>
                    Home</Text>
            ),
            tabBarIcon:({color, size})=>(
                <FontAwesome name='home' color={color} size={size}/>
            )
        }}
        />
        <Tab.Screen name='prescriptions' component={PrescriptionsScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7}}>
                    Prescriptions</Text>
            ),
            tabBarIcon:({color, size})=>(
                <FontAwesome5 name="file-prescription" size={size} color={color} />
            )
        }}/>
        <Tab.Screen name='profile' component={ProfileScreen}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7}}>
                    Profile</Text>
            ),
            tabBarIcon:({color, size})=>(
                <FontAwesome name="user-circle" size={size} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}