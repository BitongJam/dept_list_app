import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MutliTextInput = ({style,placeholder}) => {
  return (
    <TextInput style={[style,{
        textAlignVertical:'top'}]} multiline numberOfLines={5} placeholder={placeholder}/>
  )
}

export default MutliTextInput

