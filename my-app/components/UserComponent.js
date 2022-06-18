import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, RouchableOpacity} from 'react-native';

const UserComponent = (props) => {
    const {item, nav} = props;
 return (
  <View style={styles.box}>
   <Text>name: {item.name}</Text>
   <Text>email: {item.email}</Text>
      <Button title={'user details'} onPress={() => {
          nav.navigate('UserDetails',{data: item})
      }} />
  </View>
 );
};

export default UserComponent;

const styles = StyleSheet.create({
box: {
    height: 100,
    backgroundColor: 'silver',
    marginBottom: 3,
}

})