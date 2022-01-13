import * as React from "react";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SignedInStack from './navigation'
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import ThankyouScreen from './screens/ThankyouScreen/ThankyouScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'
import CheckOutScreen from './screens/CheckOutScreen/CheckOutScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
// import { Tab } from "react-native-elements/dist/tab/Tab";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from './screens/CartScreen/CartScreen.js';
import UserScreen from './screens/UserScreen/UserScreen.js';
// import Tabs from "./tabs";


const Stack = createStackNavigator()
// const Tab = createBottomTabNavigator()

// export default App 
const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
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
          <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen} />
          {/* <Stack.Screen name = 'CartScreen' component = {CartScreen} /> */}
          <Stack.Screen name = 'UserScreen' component = {UserScreen} />
          <Stack.Screen name = 'ThankyouScreen' component = {ThankyouScreen}/>
          <Stack.Screen name = 'ProfileScreen' component = {ProfileScreen}/>
          <Stack.Screen name = 'CartScreen' component = {CartScreen}/>
          <Stack.Screen name = 'CheckOutScreen' component = {CheckOutScreen}/>

      </Stack.Navigator>  

    {/* <Tabs /> */}
      {/* <Tab.Navigator
          initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                  iconName = focused ? 'https://img.icons8.com/material/344/home--v5.png' : 'https://img.icons8.com/material-outlined/344/home--v2.png';

                } else if (rn === productName) {
                  iconName = focused ? 'https://img.icons8.com/material/344/product--v1.png' : 'https://img.icons8.com/material-outlined/344/product.png';

                } else if (rn === cartName) {
                  iconName = focused ? 'https://img.icons8.com/material/344/shopping-cart--v1.png' : 'https://img.icons8.com/material-outlined/344/shopping-cart--v1.png';

                } else if (rn === userName) {
                  iconName = focused ? 'https://img.icons8.com/material/344/user-male-circle--v1.png' : 'https://img.icons8.com/material-outlined/344/user-male-circle.png';

                }
                return < Image name={iconName} />;
              },
            })}
            >
              <Tab.Screen name={homeName} component={HomeScreen} />
              <Tab.Screen name={productName} component={ProductScreen} />
              <Tab.Screen name={cartName} component={CartScreen} />
              <Tab.Screen name={userName} component={UserScreen} />
            
      </Tab.Navigator> */}
      
    </NavigationContainer >
  )
}