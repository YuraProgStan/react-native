import {StyleSheet} from 'react-native';
import UsersComponent from "./components/UsersComponent";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PostsComponent from "./components/PostsComponent";
import UserDetailsComponent from "./components/UserDetailsComponent";
import PostDetailsComponent from "./components/PostDetailsComponent";


const StackNavigator = createNativeStackNavigator()
export default function App() {

    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users'} component={UsersComponent}/>
                <StackNavigator.Screen name={'Posts'} component={PostsComponent}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetailsComponent}/>
                <StackNavigator.Screen name={'PostDetails'} component={PostDetailsComponent}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
