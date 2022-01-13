import React from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import BottomTabs, {bottomTabIcons} from '../../components/HomeScreen/BottomTabs';
import Categories from '../../components/HomeScreen/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/HomeScreen/Header';
import PopularProducts from '../../components/HomeScreen/PopularProducts';
import SomeProducts from '../../components/HomeScreen/SomeProducts';
import { POPULARPRODUCTS } from '../../data/popularproducts';
import Tabs from '../../tabs.js';

const HomeScreen = ({navigation}) => {
    // console.log(HomeScreen)

    return (
        <SafeAreaView style = {{flex : 1, position : 'relative'}}>
            <ScrollView>
                <Header />
                <Categories />
                <SomeProducts />
                <View style={styles.title}>
                    <Text style={styles.titlePP}>Latest products</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
                        <Text style={{color: '#6BB0F5', justifyContent: 'center', marginTop: 25, marginRight: 16,}}> See all </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* {POPULARPRODUCTS.map((post, index) => (
                        <PopularProducts post={post} key={index}/>
                    ))}  */}
                    <PopularProducts/>
                </View> 
                
            </ScrollView>    
            {/* <BottomTabs icons={bottomTabIcons}/> */}
            {/* <Tabs /> */}
            {/* <BottomNavigation />  */}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    titlePP:{
        margin: 18,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    title:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
export default HomeScreen;