import React, { useState, useEffect } from 'react'
import { logIn as apiLogIn } from '../../services/api'
import logo from '../../assets/logo.png'
import { Image, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, AsyncStorage } from 'react-native'
import styles from './style'

export default function logIn(props: any) {
    const { navigation } = props
    const [user, setUser] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('user').then(userFromAsyncStorage => {

            if (userFromAsyncStorage) {
                const user = userFromAsyncStorage
                navigation.navigate('Home', { user })
            }
        })
    })

    async function handleLogIn() {
        const response = await apiLogIn(user)

        const { _id } = response.data

        await AsyncStorage.setItem('user', _id)

        navigation.navigate('routeHome', { user: _id })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior='padding'
            enabled={Platform.OS === 'ios'}
        >
            <Image source={logo}></Image>
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Digite seu usuário no gitHub'
                style={styles.input}
                value={user}
                onChangeText={setUser}
            />

            <TouchableOpacity
                onPress={handleLogIn}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
