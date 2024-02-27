import { View, Text } from 'react-native'
import React from 'react'

export default function SearchScreen({navigation}) {
  return (
    <View>
      <Text onPress={()=>{navigation.navigate('Profile')}} >SearchScreen</Text>
    </View>
  )
}