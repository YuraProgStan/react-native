import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, RouchableOpacity, Modal, Pressable} from 'react-native';
import {postService} from "../src/services/postService";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const PostsComponent = ({ navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const apiPosts = async () =>{
          const postsList =  await postService.getPosts();
          setPosts([...postsList])
        }
        apiPosts();


    }, [])
    console.log(posts);
    return (
        <View style={styles.centeredView}>
      {/*<FlatList data={posts} renderItem={({item}) => {*/}
      {/*    return <PostComponent nav={navigation} item={item}  />*/}
      {/*}} keyExtractor={item => item.id.toString()}/>*/}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
    </View>
 );
};

export default PostsComponent;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})