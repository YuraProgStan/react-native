import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import {THEME} from "../Theme";

const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('')
        } else {
            if (!value.trim()) {
                Alert.alert('Input can\'t be empty')
            }
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                // onChangeText={text => setValue(text)}
                //или
                       onChangeText={setValue}
                       value={value}
                       placeholder={'Type something...'}
                       autoCorrect={false}
                       autoCapitalize={'none'}
            />
            <Button
                // disabled={!value.trim()}
                title={'Add'}
                onPress={pressHandler}/>
        </View>
    );
};
export default AddTodo;

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})