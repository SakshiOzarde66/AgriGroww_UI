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
        marginTop: 40,
    },
    logo: {
        width: 15,
        height: 10,
    },
    bg: {
        backgroundColor: 'green',
        padding: 6,
    }
})

export default Header;