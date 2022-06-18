import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Button, RouchableOpacity} from 'react-native';

const PostDetailsComponent = ({route, navigation}) => {
    const {params:{data}} = route;
    useEffect(() => {
        navigation.setOptions({title: data.title.toUpperCase()})
    }, [])
 return (
  <View>
      <Text>{data.body}</Text>
  </View>
 );
};

export default PostDetailsComponent;

const styles = StyleSheet.create({})