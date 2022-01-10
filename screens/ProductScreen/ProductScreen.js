import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ProductsList from '../../components/ProductScreen/ProductsList';

const ProductScreen = ({list , navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}> Products </Text>
                </View>
                <ProductsList navigation = {navigation} list={list}/>
            </ScrollView>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    titlecontainer:{
        backgroundColor: 'green',
        marginTop: 20,
    },
    title:{
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        margin: 20,
    },
})

export default ProductScreen;