import * as React from "react";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignedInStack from './navigation'
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";

const Stack = createStackNavigator()

// export default App 
const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
              initialRouteName='HomeScreen'
              screenOptions={screenOptions}
          >
          <Stack.Screen name = 'SplashScreen' component = {SplashScreen} />
          <Stack.Screen name = 'LoginScreen' component = {LoginScreen} />
          <Stack.Screen name = 'RegisterScreen' component = {RegisterScreen} />
          <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
          <Stack.Screen name = 'ProductScreen' component = {ProductScreen} />
          <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen} />
      </Stack.Navigator>  
    </NavigationContainer >
  )
}