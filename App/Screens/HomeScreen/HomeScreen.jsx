import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Header from './Header'
import Routine from './Routine'


export default function HomeScreen() {
  return (
    <View>
        <Header/>
        <Routine/>
    </View>
  )
}

