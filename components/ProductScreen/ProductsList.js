import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { PRODUCTS } from '../../data/product';

const ProductsList = ({ list }) => {
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
                {PRODUCTS.map((list, index) => (
                    <View key={index}  style={styles.txtnimg}>
                        <View>
                            <Image source={{uri: list.imageUrl}} style={styles.image}/>
                        </View>
                        <View>
                            <Text style={styles.listTitle}>{list.product_name}</Text>
                            <Text style={styles.listPrize}>{list.product_prize}</Text>
                        </View>    
                    </View>    
                ))}
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    image:{
        width: 150, 
        height: 150,
        marginLeft: 10,
        borderWidth: 2,
        borderRadius: 10,
    },
    txtnimg: {
        flexDirection: 'row',
        // borderColor: 'black',
        // borderWidth: 2,
        marginTop: 8,
    },
    listTitle:{
        fontSize: 20,
        marginLeft: 17,
    },
    listPrize: {
        fontSize: 21,
        marginLeft: 17,
        color: 'green',
    },

})

export default ProductsList;