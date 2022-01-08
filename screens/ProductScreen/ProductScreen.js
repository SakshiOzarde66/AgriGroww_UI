import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ProductsList from '../../components/ProductScreen/ProductsList';

const ProductScreen = ({list}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}> Products </Text>
                <ProductsList list={list}/>
            </ScrollView>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: 'green',
        textAlign: 'center',
        margin: 35,
    },
})

export default ProductScreen;