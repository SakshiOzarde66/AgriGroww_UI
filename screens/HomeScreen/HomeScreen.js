import React from 'react';
import { SafeAreaView } from 'react-native';
import Categories from '../../components/HomeScreen/Categories';
import Header from '../../components/HomeScreen/Header';
import PopularProducts from '../../components/HomeScreen/PopularProducts';
import SomeProducts from '../../components/HomeScreen/SomeProducts';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <Categories />
            <SomeProducts />
            <PopularProducts />
        </SafeAreaView>
    );
}

export default HomeScreen;