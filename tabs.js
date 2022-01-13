import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {HomeScreen} from '../agrigrow/components/HomeScreen/BottomNavigation'
import {ProductScreen} from '../agrigrow/components/HomeScreen/BottomNavigation'
import {UserScreen} from '../agrigrow/components/HomeScreen/BottomNavigation'
import {CartScreen} from '../agrigrow/components/HomeScreen/BottomNavigation'

//screen names
const homeName = 'Home';
const productName = 'Product';
const cartName = 'Cart';
const userName = 'User';



const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        // <NavigationContainer>
            <Tab.Navigator
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
            
            </Tab.Navigator> 
        // </NavigationContainer>      
//     <Tab.Navigator
//                 tabBarOptions = {{
//                     showlabel: false,
//                     style: {
//                         position: 'absolute',
//                         bottom: 25,
//                         left: 20,
//                         elevation: 0,
//                         backgroundColor: 'white',
//                         borderRadius: 10,
//                     }
//                 }}
//             >
//                 <Tab.Screen name="Home" component={HomeScreen} />
//                 <Tab.Screen name="Product" component={ProductScreen} />
//                 <Tab.Screen name="Cart" component={CartScreen} />
//                 <Tab.Screen name="User" component={UserScreen} />
//             </Tab.Navigator>
        // </NavigationContainer>
        
    );
}

export default Tabs
