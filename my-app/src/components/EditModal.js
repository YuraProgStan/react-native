import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Modal, Alert} from 'react-native';
import {THEME} from "../Theme";
import AppButton from "./ui/AppButton";

const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value);
    const saveHandler = ( ) => {
        if(title.trim().length < 3){
            Alert.alert(`Error! Min length is 3 characters. Now is only ${title.trim().length} characters`)
        } else {
            onSave(title)
        }
    }
    const cancelHandler = () => {
        setTitle(value)
        onCancel()
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
                    <AppButton  onPress={cancelHandler} color={THEME.DANGER_COLOR}>
                        Cancel
                    </AppButton>
                    <AppButton title={'Save'} onPress={saveHandler}>
                        Save
                    </AppButton>
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
        width: '80%',
        marginBottom: 10
    },
    buttons:{
        width: '100%',
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})