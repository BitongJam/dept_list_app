import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';

const RoundIconBtn = ({ antIconName, size, color, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.icon, { ...style }]}>
       <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.PRIMARY}
      
      
    />
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.ACCENT,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
});

export default RoundIconBtn;
