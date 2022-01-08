import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* <ProductsList list={list}/> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 5,
    },
})

export default DetailsScreen;