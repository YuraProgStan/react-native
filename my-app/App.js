import {FlatList, StyleSheet, Text, View} from 'react-native';
import User from "./components/user";

let users = [
    {name:'vasya', age: 31, status: false},
    {name:'petya', age: 25, status: false},
    {name:'kolya', age: 33, status: true},
    {name:'anya', age: 20, status: false},
    {name:'oleg', age: 32, status: true},
    {name:'olya', age: 24, status: false},
    {name:'natasha', age: 27, status: true}
]
export default function App() {
  return (
    <View style={styles.container}>
<FlatList
    data={users}
    renderItem={({item}) => {
        return <User item={item} />
    }}
    keyExtractor={(item, index) => index.toString()}
   />
    </View>
  );
}

const styles = StyleSheet.create({

});
