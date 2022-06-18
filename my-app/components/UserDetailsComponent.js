import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Button, RouchableOpacity} from 'react-native';

const UserDetailsComponent = ({route, navigation}) => {
    const {params:{data}} = route;
    useEffect(() => {
        navigation.setOptions({title: data.name});
    }, [])

    return (
  <View>
   <Text>{data.name} {data.email}</Text>
  </View>
 );
};

export default UserDetailsComponent;

const styles = StyleSheet.create({})