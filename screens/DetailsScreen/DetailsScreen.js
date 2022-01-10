import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}> Details </Text>
                </View>
                {/* <ProductsList list={list}/> */}
            </ScrollView>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
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

export default DetailsScreen;