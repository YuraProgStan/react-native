import React from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {THEME} from "../Theme";

const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems:'center',
        justifyContent: 'flex-end',
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})