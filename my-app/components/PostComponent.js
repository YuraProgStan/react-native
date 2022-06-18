import React from 'react';
import {View, Text, FlatList, StyleSheet, Button, RouchableOpacity} from 'react-native';

const PostComponent = ({item, nav}) => {
 return (
  <View style={styles.box}>
   <Text>title: {item.title}</Text>
      <Text>userId: {item.userId}</Text>
      <Button title={'post details'}  onPress={() => {
      nav.navigate('PostDetails',{data: item})
      }} />
  </View>
 );
};

export default PostComponent;

const styles = StyleSheet.create({
    box:{
        height:100,
        backgroundColor:'lightgray',
        marginBottom: 3
    }
})