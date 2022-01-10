import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'



const RegisterForm = ({ navigation }) => {
    const RegisterFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        Password: Yup.string().required().min(8, 'Your password has to have at least 8 characters'), 
    })

    return (
        <View style={styles.wrapper}> 
            <Formik
                initialValues={{ email: '', username: '', password: ''}}
                onSubmit={values => {
                    console.log(values)
                }}
                validationSchema={RegisterFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        values.email.length < 1 || Validator.validate(values.email) ? 'black' : 'red'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='E-mail'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        values.username.length < 1 || values.username.length >= 4 ? 'black' : 'red'
                },
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Username'
                        autoCapitalize='none'
                        // keyboardType='Username'
                        textContentType='username'
                        // autoFocus={true}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>
                <View style= {[styles.inputField,
                {
                    borderColor: 
                        1 > values.password.length || values.password.length >= 8
                        ? 'black'
                        : 'red',
                }
                ]}>
                    <TextInput
                        placeholderTextColor = '#444'
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect= {false}
                        secureTextEntry={true}
                        textContentType='password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <Pressable style={styles.button(isValid)}
                            onPress={handleSubmit}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </Pressable>
                <View style={styles.logincontainer}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{color: '#6BB0F5'}}> Login </Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
        alignItems: 'center',
    },
    inputField:{
        borderRadius: 16,
        borderColor: 'black',
        padding: 15,
        margin: 15,
        marginTop: 15,
        borderWidth: 1,
        width: 320,
        justifyContent: 'center',
        fontSize: 15,
    },
    button: isValid => ({
        backgroundColor: isValid ? '#668000' : '#539100',
        borderRadius: 20,
        padding:15,
        width: 200,
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    buttonText: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 25,
    },
    logincontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})

export default RegisterForm;