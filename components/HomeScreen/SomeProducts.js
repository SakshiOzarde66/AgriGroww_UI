import React from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { SOMEPRODUCTS } from '../../data/homescroll';

const SomeProducts = () => {
    return (
        <View style={{marginBottom: 13}}>
            <Text style={styles.titleSP}>Shop By Categories</Text>
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
            >
                {SOMEPRODUCTS.map((products, index) => (
                    <View key={index} >
                        <Image source={{uri: products.image}} style={styles.products}/>
                        <Text style={styles.productTitle}>{products.product}</Text>
                        {/* <Text style={styles.productPrize}>{products.prize}</Text> */}
                    </View>    
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleSP:{
        margin: 18,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    products: {
        width: 150, 
        height: 150,
        marginLeft: 16,
        borderWidth: 2,
        // borderRadius: 10,
    },
    productTitle:{
        fontSize: 17,
        marginLeft: 17,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'green',
        color: 'white',
        padding: 2,
    },
    productPrize:{
        fontSize: 21,
        marginLeft: 17,
        color: 'green',
    },
})

export default SomeProducts;