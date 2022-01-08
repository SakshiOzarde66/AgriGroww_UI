import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.bg}>
                <Image source={require('../../assets/images/home/home_appbar.png')} style={StyleSheet.logo} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    logo: {
        width: 10,
        height: 5,
    },
    bg: {
        backgroundColor: 'green',
    }
})

export default Header;