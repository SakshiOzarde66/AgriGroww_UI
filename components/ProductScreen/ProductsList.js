import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Pressable } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { PRODUCTS } from '../../data/product';

const ProductsList = ({ list , navigation }) => {
    return (
        <View style={styles.container}>
            {/* <ScrollView> */}
                {PRODUCTS.map((list, index) => (
                    <View key={index}  style={styles.txtnimg}>
                        <View>
                            <Image source={{uri: list.imageUrl}} style={styles.image}/>
                        </View>
                        <View style={styles.txtnbtn}>
                            <View style={styles.txtnprize}>
                                <View>
                                    <Text style={styles.listTitle}>{list.product_name}</Text>
                                    <Text style={styles.listquantity}>{list.quantity}</Text>
                                </View>
                                <Text style={styles.listPrize}>{list.product_prize}</Text>
                            </View>   
                            <View style={styles.btnfield}>
                                <Text></Text>
                                <Pressable style={styles.button}
                                    onPress={() => navigation.navigate('DetailsScreen')}>  
                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                </Pressable>
                                <Text></Text>
                            </View>
                            
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
        backgroundColor: 'black',
        borderRadius: 10,
    },
    txtnimg: {
        flexDirection: 'row',
        marginTop: 8,
        width: '100%',
        justifyContent:'space-between',
        backgroundColor: '#D5E5CF',
        borderRadius: 10,
        padding: 5,
    },
    txtnprize:{
        justifyContent:'space-between',
        padding: 25,
        textAlign:'left',
        // paddingLeft: 25,
        paddingTop: 5,
    },
    listTitle:{
        fontSize: 20,
        paddingTop: 5,
    },
    listquantity:{
        fontSize: 15,
    },
    listPrize: {
        fontSize: 21,
        color: 'green',
    },
    txtnbtn:{
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        backgroundColor: '#D5E5CF',//'#B5BBB3',//',
        marginRight: 10,
        // margin: 20,
        // padding: 5,
        marginLeft: 12,
    },
    button:{
        // color: 'green',
        padding: 5,
        marginRight: 20,
        backgroundColor: 'green',
        // justifyContent: 'flex-end',
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
    },
    btnfield:{
        justifyContent:'space-around',
    },
})

export default ProductsList;