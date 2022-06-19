import React from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';

const AppCard = (props) => {


 return (
  <View style={[styles.default,props.style]}>
      {props.children}
  </View>
 );
};

export default AppCard;

const styles = StyleSheet.create({
    default: {
        padding: 20,
        borderWidth:2,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        borderColor: '#fff',
        borderRadius: 10,
        elevation: 8
    }
})