import React from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({todos,removeTodo,addTodo, openTodo}) => {
    let  content = (
        <FlatList
            data={todos}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />}
            keyExtractor={item => item.id.toString()}
        />
    )
    if(todos.length === 0){
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} source={require("../../assets/no-items.png")} />
                {/*<Image style={styles.image} source={{uri:'https://bestprogrammer.ru/wp-content/uploads/2020/08/React.jpg'}} />*/}
            </View>)
    }
 return (
  <View>
      <AddTodo onSubmit={addTodo}/>
        {content}
  </View>
 );
};

export default MainScreen;

const styles = StyleSheet.create({
    imgWrap:{
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    }
})