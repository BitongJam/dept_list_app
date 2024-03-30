import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholderTextColor={colors.ACCENT}
        selectionColor={colors.ACCENT}
        placeholder='Search here..'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    borderWidth: 0.5,
    borderColor: colors.ACCENT,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {
    justifyContent: 'center',
    borderWidth: 1
  },
  clearIcon: {
    position: 'absolute',
    right: 10,
  },
});

export default SearchBar;
