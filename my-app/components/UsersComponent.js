import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, Pressable} from 'react-native';
import {getUsers} from "../src/api/API";
import UserComponent from "./UserComponent";

const UsersComponent = (props) => {
    const {navigation} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const users = await getUsers();
            setUsers([...users])
        }

        fetchData();
        return () => console.log('hello');
    }, [])
 return (
         <View>
             <Pressable style={styles.button}  onPress={() => {
                 navigation.navigate('Posts', {navigation:navigation})
             }} ><Text style={styles.text}>posts</Text></Pressable>


         <FlatList data={users} renderItem={({item}) => {
             return <UserComponent nav={navigation} item={item}/>
         }} keyExtractor={item => item.id.toString()}/>
     </View>
 );
};

export default UsersComponent;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: 5

    },
    text:{
        color:'white',
        fontSize:20
    }
})