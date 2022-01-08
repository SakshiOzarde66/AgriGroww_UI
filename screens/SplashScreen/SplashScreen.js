import React, {useState} from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, Image, Button, View, TouchableOpacity} from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen';

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>AgriGroww</Text>
            <Text style={styles.subtitle}>Quality is the best business plan!!</Text>
            <Image style={styles.logo} source={require('../../assets/images/splash/splash.png')}/>
            <View>
                {/* <Button
                    title= " Continue "
                    // onPress = {() => navigation('LoginScreen')}
                /> */}
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text> Continue </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        alignItems:'center',
        // justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 50,
        color: 'green',
        fontWeight: 'bold',
        // fontFamily: "Arial",
        // fontFamily: 'PatuaOne-Regular.ttf'
    },
    subtitle: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 20,
        color: 'grey',
        fontWeight: 'bold',
        // fontFamily: "Arial",
        // fontFamily: 'PatuaOne-Regular.ttf'
    },
    logo: {
        width:390,
        height:390,
        marginTop:25,
    }
})

export default SplashScreen;
