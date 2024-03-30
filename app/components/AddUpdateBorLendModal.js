import { StyleSheet, Text, View,Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import MutliTextInput from './MutliTextInput'
import Button from './Button'

const ModalCard = ({visible,onClose}) => {
 
  
  return (
    <Modal style={styles.modalContainer} transparent visible={visible}>
    
        <View style={styles.modalCardContainer}>
            <Text style={styles.modalTitle}>Debt Details</Text>
            <TextInput style={styles.modalInput} placeholder='Name of Person'/>
            <MutliTextInput style={styles.modalMultiInput} placeholder="Description"/>
            <TextInput style={styles.modalInput} keyboardType='numeric' placeholder='Amount'/>
            <Button
                onPress={()=> console.log('on press')}
                title="Submit"
                style={styles.modalButton}/>

            <Button
                onPress={onClose}
                title="cancel"
                style={[styles.modalButton,{backgroundColor:'red',color:'white'}]}/>
        </View>

       
    </Modal>
  )
}

export default ModalCard

const styles = StyleSheet.create({
    modalButton:{
       marginVertical: 10,
       borderRadius: 20,
       fontSize: 20
    },
    modalTitle:{
        fontSize: 40,
        fontWeight:'bold'
    },
    modalCardContainer:{
        backgroundColor: colors.PRIMARY,
        flex:1,
        padding:20,
        
    },modalInput:{
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:50,
        fontSize:20,
        marginVertical: 10
    },modalMultiInput:{
        borderWidth:1,
        borderRadius: 10,
        paddingHorizontal:10,
        height: 200,
        fontSize:20,
        paddingTop:10,
    }
})