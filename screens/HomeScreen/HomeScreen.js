import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import BottomTabs, {bottomTabIcons} from '../../components/HomeScreen/BottomTabs';
import Categories from '../../components/HomeScreen/Categories';
import Header from '../../components/HomeScreen/Header';
import PopularProducts from '../../components/HomeScreen/PopularProducts';
import SomeProducts from '../../components/HomeScreen/SomeProducts';
import { POPULARPRODUCTS } from '../../data/popularproducts';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <Categories />
                <SomeProducts />
                <Text style={styles.titlePP}>Popular Products</Text>
                <ScrollView>
                    {POPULARPRODUCTS.map((post, index) => (
                        <PopularProducts post={post} key={index}/>
                    ))} 
                </ScrollView>
                <BottomTabs icons={bottomTabIcons}/>
            </ScrollView>    
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    titlePP:{
        margin: 18,
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
})
export default HomeScreen;