import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import AppTextBold from "./AppTextBold";
import {THEME} from "../../Theme";


const AppButton = ({children, onPress, color = THEME.MAIN_COLOR}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color }}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#fff'
    }
})