import {StyleSheet, View, Alert} from 'react-native';
import {useState} from "react";
import * as Font from  "expo-font";
import AppLoading from 'expo-app-loading';

import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";


async function loadApplication (){
    await  Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    })
}
export default function App() {
const [isReady, setIsReady] = useState(false)

    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([
        {id: '1', title: 'Learn React Native'},

    ]);
if(!isReady){
    return <AppLoading
        startAsync = {loadApplication}
        onError={err => console.log(err)}
    onFinish = {() => setIsReady(true)}
    />
}
    const addTodo = (title) => {
        setTodos(prev => [...prev,
            {
                id: Date.now().toString(),
                title: title
            }]
        )
    }

    const removeTodo = (id) => {
        const todo = todos.find(t => t.id === id);
        Alert.alert(
            "Remove element",
            `Are you sure, that you want delete element "${todo.title}"?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Delete",
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(item => item.id !== id))
                    }
                }
            ],
            {cancelable: false}
        );

    }

    const updateTodo = (id, title) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        }))
    }
    let content = <MainScreen
        todos={todos}
        removeTodo={removeTodo}
        addTodo={addTodo}
        openTodo={setTodoId}
    />;
    if (todoId) {
        const selected = todos.find(todo => todo.id === todoId);
        content = <TodoScreen
            onRemove={removeTodo}
            goBack={() => setTodoId(null)}
            todo={selected}
            onSave={updateTodo}/>
    }
    return (
        <View>
            <Navbar title={"Todo App"}/>
            <View style={styles.container}>
                {content}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }

});
