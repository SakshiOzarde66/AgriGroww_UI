import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { CATEGORIES } from '../../data/categories';

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleC}>Categories</Text>
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
            >
                {CATEGORIES.map((categories, index) => (
                    <View key={index} >
                        <Image source={{uri: categories.image}} style={styles.categories}/>
                    </View>    
                ))}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 6,
    },
    titleC:{
        margin: 18,
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    categories: {
        width: 150, 
        height: 150,
        marginLeft: 16,
        borderWidth: 2,
        borderRadius: 10,
    },
})
export default Categories;