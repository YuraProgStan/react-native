import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppText = (props) => {
 return (
   <Text style={[styles.default, props.style]}>{props.children}</Text>
 );
};

export default AppText;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
})