import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={screenOptions}
        >
            <Stack.Screen name = 'SplashScreen' component = {SplashScreen} />
            <Stack.Screen name = 'LoginScreen' component = {LoginScreen} />
            <Stack.Screen name = 'RegisterScreen' component = {RegisterScreen} />
            <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
            <Stack.Screen name = 'ProductScreen' component = {ProductScreen} />

        </Stack.Navigator>
    </NavigationContainer>
)

export default SignedInStack