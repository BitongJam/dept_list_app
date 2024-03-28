import { FlatList, StyleSheet, Text, View,StatusBar } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import SearchBar from './SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import Modal from '../components/Modal'


const Intro = () => {
    const [visModal,setvisModal] = useState(false)
    // dataItems=[{'id':'1','name': 'name1'},{'id':'2','name': 'name2'}]
    dataItems =[]
    handleRoundIconBtnPlus = () =>{
       return setvisModal(true)
    }
    
    for (let i = 1; i <= 100; i++) {
        // Use backticks (`) for string interpolation
        let obj = {
            'id': i,
            'name': `name ${i}` // Correctly interpolate the value of 'i'
        };
        dataItems.push(obj);
    }
    
  return (
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.listContainer}>
        <FlatList data={dataItems} renderItem={({item})=>{
            return (
                <View key={item.id} style={styles.listItemContainer}>
                    <Text style={styles.listItem}>{item.name}</Text>
                </View>
            )
        }}  />
        <Modal visible={visModal}/>
      </View>
      {/* <RoundIconBtn antIconName="plus" style={styles.addBtn} onPress={!visModal ? true : false}/> */}

      <RoundIconBtn antIconName="plus" style={styles.addBtn} onPress={handleRoundIconBtnPlus}/>

    </View>
  )
}



export default Intro

const styles = StyleSheet.create({
    container:{
        paddingTop: StatusBar.currentHeight, //Only for Android
        flex: 1,
        backgroundColor: colors.PRIMARY
    },listContainer:{
        // backgroundColor: 'red',
        paddingHorizontal: 5
    },listItemContainer:{
        borderWidth: 1,
        borderColor: colors.ACCENT,
        backgroundColor:colors.ACCENT,
        padding: 10,
        margin:5
    },listItem:{
        fontSize:30,
        color:colors.PRIMARY
    },addBtn:{
        position: 'absolute',
        right: 15,
        bottom: 50,
        zIndex: 1,
    }
})