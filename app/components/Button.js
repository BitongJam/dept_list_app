import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

const Button = ({onPress,style,title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.ACCENT,
        padding:10,
        alignContent: 'center'
    },buttonText:{
        color:colors.SECONDARY,
        textAlign: 'center',
        fontSize: 20

    }
})