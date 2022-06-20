import React, {useReducer, useContext} from "react";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {
    ADD_TODO,
    CLEAR_ERROR,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "./types";
import {ScreenContext} from "../screen/screenContext";
import {Alert} from "react-native";
import {Http} from "../../http";
import {API_URL} from '@env'

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null
    }
    const {changeScreen} = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const addTodo = async (title) => {
        // const response = await fetch('https://react-native-todolist-ae355-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({title})
        // });
        // const data = await response.json();

            try{
                const data = await Http.post(
                    `${API_URL}.json`,
                    {title}
                )
                dispatch({type: ADD_TODO, title, id: data.name})
            }catch (e) {
                showError('Something went wrong...')
            }
    }
    const removeTodo = id => {
        const todo = state.todos.find(t => t.id !== id)
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
                    onPress: async () => {
                        changeScreen(null);
                        await Http.delete(`${API_URL}/${id}.json`)
                        dispatch({type: REMOVE_TODO, id});
                    }
                }
            ],
            {cancelable: false}
        );

    }
    const updateTodo = async (id, title) => {
        clearError();
        try {
            // const response = await fetch(`https://react-native-todolist-ae355-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
            //     method: 'PATCH',
            //     headers: {'Content-Type': 'application/json'},
            //     body: JSON.stringify({title})
            // });
            await Http.patch(`${API_URL}/${id}.json`, {title})
            dispatch({type: UPDATE_TODO, id, title});
        } catch (err) {

        }
    }
    const fetchTodos = async () => {
        showLoader();
        clearError();
        try {
            const data = await Http.get(`${API_URL}.json`);
            const todos = Object.keys(data).map(key => ({...data[key], id: key}));
            dispatch({type: FETCH_TODOS, todos})
        } catch (err) {
            showError('Something went wrong...');
            console.log(err,'err')
        }finally {
            hideLoader();
        }
    }
    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});
    const showError = error => dispatch({type: SHOW_ERROR, error});
    const clearError = () => dispatch({type: CLEAR_ERROR});
    return <TodoContext.Provider value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos
    }}>{children}</TodoContext.Provider>
}