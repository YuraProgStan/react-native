import React, {useCallback, useContext, useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import {THEME} from "../Theme";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";
import AppLoader from "../components/AppLoader";
import AppText from "../components/ui/AppText";
import AppButton from "../components/ui/AppButton";

const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext)
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2);
    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])
    useEffect(() => {
        loadTodos();
    }, [])

    useEffect(() => {

        const update = () => {
            const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width)
        }
        const subscription = Dimensions.addEventListener('change', update)
        return () => subscription?.remove()

    })

    if(loading){
      return  <AppLoader />
    }

    if(error){
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>Repeat</AppButton>
            </View>
        )
    }
    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                data={todos}
                renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} source={require("../../assets/no-items.png")}/>
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
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    center:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    error:{
        fontSize: 20,
        color: THEME.DANGER_COLOR
    }
})