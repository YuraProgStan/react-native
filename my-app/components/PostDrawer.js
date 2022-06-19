import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import PostsComponent from "./PostsComponent";
import TemplateComponent from "./TemplateComponent";

const Drawer = createDrawerNavigator();
const PostDrawer = () => {
 return (
     <Drawer.Navigator>
         <Drawer.Screen name="Posts" options={{title : 'posts'}} component={PostsComponent} />
         <Drawer.Screen name="Template" options={{title : 'template'}} component={TemplateComponent} />
     </Drawer.Navigator>
 );
};

export default PostDrawer;

const styles = StyleSheet.create({})