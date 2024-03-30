import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

const BorrowsLenderTable = () => {
  return (
    <View style={styles.listContainer}>
                <FlatList data={dataItems} renderItem={({ item }) => {
                    // Borrowers and Lenders list
                    return (
                        <TouchableHighlight onPress={() => console.log(item.name)}>
                            <View key={item.id} style={styles.listItemContainer} >
                                <Text style={styles.listItem}>{item.name}</Text>
                            </View>
                        </TouchableHighlight>

                    )
                }} />
                
            </View>
  )
}

export default BorrowsLenderTable

const styles = StyleSheet.create({
    listContainer: {
        // backgroundColor: 'red',
        borderWidth:1,
        borderColor:'red',
    }, listItemContainer: {
        backgroundColor: colors.PRIMARY,
        padding: 10,
    }, listItem: {
        fontSize: 30,
        color: colors.ACCENT
    }
})