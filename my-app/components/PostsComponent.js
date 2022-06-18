import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, RouchableOpacity} from 'react-native';
import {postService} from "../src/services/postService";
import PostComponent from "./PostComponent";

const PostsComponent = ({ navigation}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const apiPosts = async () =>{
          const postsList =  await postService.getPosts();
          setPosts(postsList)
        }
        apiPosts();


    }, [])
    console.log(posts);
    return (
  <View>
   <Text>PostsComponent page</Text>
      <FlatList data={posts} renderItem={({item}) => {
          return <PostComponent nav={navigation} item={item}  />
      }} keyExtractor={item => item.id.toString()}/>
  </View>
 );
};

export default PostsComponent;

const styles = StyleSheet.create({})