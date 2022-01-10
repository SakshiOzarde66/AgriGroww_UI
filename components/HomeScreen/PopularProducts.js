import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { POPULARPRODUCTS } from '../../data/popularproducts';
import { Divider } from 'react-native-elements';

const PopularProducts = () => {
    return (
        // <View>
        //     {/* <Text style={styles.titlePP}>Latest Products</Text> */}
        //     <ScrollView  horizontal
        //      showsHorizontalScrollIndicator={false}
        //     >
        //         {POPULARPRODUCTS.map((post, index) => (
        //             <View key={index}>
        //                 <Image source={{uri: post.imageUrl}} style={styles.post}/>
        //             </View>
        //         ))}


        //     </ScrollView>
        // </View>
        <View style={{marginBottom: 13}}>
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
            >
                {POPULARPRODUCTS.map((posts, index) => (
                    <View key={index}>
                        <Image source={{uri: posts.imageUrl}} style={styles.post}/>
                            <View style={styles.title}>
                                <Text style={styles.postTitle}>{posts.product}</Text>
                                <Text style={styles.postQuantity}>{posts.quantity}</Text>
                            </View>
                            <Text style={styles.postPrize}>{posts.prize}</Text>
                    </View>    
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titlePP:{
        margin: 18,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'green',
    },
    post:{
        width: 190, 
        height: 190,
        marginLeft: 16,
        borderWidth: 2,
        // margin: 10,
        // borderRadius: 10,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postTitle:{
        fontSize: 22,
        marginLeft: 20,
        color: 'black',
        padding: 5,
    },
    postQuantity:{
        fontSize: 15,
        marginLeft: 17,
        padding: 5,
        color: 'gray',
    },
    postPrize:{
        fontSize: 17,
        marginLeft: 17,
        color: 'green',
        marginBottom: 5,
        padding: 5,
        marginBottom: 40,
    }
})

export default PopularProducts;