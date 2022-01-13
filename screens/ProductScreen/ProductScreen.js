import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTabs, {bottomTabIcons}  from '../../components/HomeScreen/BottomTabs';
import ProductsList from '../../components/ProductScreen/ProductsList';

const ProductScreen = ({list , navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>
                    {/* <Image 
                        source={{uri: 'https://img.icons8.com/material-outlined/344/back--v1.png'}} 
                        style={{width: 5, height: 5}}/> */}
                    <Text style={styles.title}> Products </Text>
                    {/* <Text></Text> */}
                </View>
                <ProductsList navigation = {navigation} list={list}/>
            </ScrollView>   
            {/* <BottomTabs icons={bottomTabIcons}/>  */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
    titlecontainer:{
        backgroundColor: 'green',
        // marginTop: 35,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    icon:{
        width:4,
        height:4,
    },
})

export default ProductScreen;