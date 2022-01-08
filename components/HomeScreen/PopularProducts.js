import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PopularProducts = () => {
    return (
        <View>
            <Text style={styles.titlePP}>Popular Products</Text>
        </View>
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


export default PopularProducts;