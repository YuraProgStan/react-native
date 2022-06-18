import {Button, FlatList, Image, StyleSheet, Text, View} from "react-native";

 const User = ({item}) => {
    return (
        <View style={[styles.box,styles.item]}>
            <Image style={styles.tinyLogo} source={{
                uri: 'https://assets.survivalinternational.org/pictures/489/4116455578-1f8d781f66-b_screen.jpg'
            }}/>
            <Text>{item.name}-{item.age}</Text>
            <Button
                title={'some button'}
            onPress={() => console.log('press')}
            />
        </View>
    );
}
export default User
const styles = StyleSheet.create({
    box: {
        height: 200,
        width: '100%',
        marginBottom: 10,
    },
    item:{
        backgroundColor: 'silver'
    },
    tinyLogo:{
        width: 60, height: 60
    }
});