import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {THEME} from "../Theme";

const AppLoader = () => {
 return (
  <View style={styles.center}>
      <ActivityIndicator size={'large'} color={THEME.MAIN_COLOR}/>
  </View>
 );
};

export default AppLoader;

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})