import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity, TextInput, Modal, Alert} from 'react-native';
import {THEME} from "../Theme";

const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = ( ) => {
        if(title.trim().length < 3){
            Alert.alert(`Error! Min length is 3 characters. Now is only ${title.trim().length} characters`)
        } else {
            onSave(title)
        }
    }
    return (
        <Modal visible={visible} animated={'slide'} transparent={false}>
            <View style={styles.wrap}>
                <TextInput style={styles.input}
                           placeholder={'Enter title'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           maxLength={64}
                           value={title}
                           onChangeText={setTitle}
                />
                <View style={styles.buttons}>
                    <Button title={'Cancel'} onPress={onCancel} color={THEME.DANGER_COLOR}/>
                    <Button title={'Save'} onPress={saveHandler}/>
                </View>
            </View>
        </Modal>
    );
};

export default EditModal;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons:{
        width: '100%',
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})