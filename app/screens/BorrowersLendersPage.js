import { FlatList, StyleSheet, Text, View, StatusBar, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import colors from '../misc/colors'
import SearchBar from './SearchBar'
import RoundIconBtn from '../components/RoundIconBtn'
import Modal from '../components/AddUpdateBorLendModal'
import BorrowsLenderTable from '../components/BorrowsLenderTable'


const BorrowersLendersPage = () => {
    const [visModal, setvisModal] = useState(false)
    // dataItems=[{'id':'1','name': 'name1'},{'id':'2','name': 'name2'}]
    dataItems = []
    handleRoundIconBtnPlus = () => {
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

    closeModal = () => {
        // console.log('close modal');
        setvisModal(false);
    }

    return (
        <View style={styles.container}>
            <SearchBar />
            <BorrowsLenderTable/>
            <Modal visible={visModal} onClose={closeModal} />
            {/* <RoundIconBtn antIconName="plus" style={styles.addBtn} onPress={!visModal ? true : false}/> */}

            <RoundIconBtn antIconName="plus" style={styles.addBtn} onPress={handleRoundIconBtnPlus} />

        </View>
    )
}



export default BorrowersLendersPage

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight, //Only for Android
        flex: 1,
        padding:4,
        backgroundColor: colors.PRIMARY
    }, addBtn: {
        position: 'absolute',
        right: 15,
        bottom: 50,
        zIndex: 1,
    }
})