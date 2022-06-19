import {StyleSheet} from 'react-native';
import UsersComponent from "./components/UsersComponent";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PostDrawer from "./components/PostDrawer";


const BottomTabNavigator = createBottomTabNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator
                tabBarOptions={{tabBarStyle: {justifyContent: 'center', alignItems: 'center'}}}
            >
                <BottomTabNavigator.Screen name={'users'} component={UsersComponent}/>
                <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
