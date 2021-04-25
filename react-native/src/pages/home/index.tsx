import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native'
import { styles } from './style'
import * as api from '../../services/api'

import logo from '../../assets/logo.png'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import itsmatch from '../../assets/itsamatch.png'

export default function Home(props: any) {
    const { navigation } = props
    const id = navigation.getParam('user')
    const [users, setUsers] = useState([])
    const [matchDev, setMatchDev]: any = useState(false)

    useEffect(() => {
        async function loadUsers() {
            const response = await api.loadUsers(id)

            setUsers(response.data)
        }

        loadUsers()
    }, [id])

    useEffect(() => {
        const socket = api.getSocket(id)

        socket.on('match', (dev: any) => {
            setMatchDev(dev)
        })

        return () => {
            socket.close()
        }
      }, [id])

    async function handleLike() {
        const [user, ...rest]: any = users

        await api.like(user._id, id)

        setUsers(rest)
    }

    async function handleDislike() {
        const [user, ...rest]: any = users

        await api.dislike(user._id, id)

        setUsers(rest)
    }

    async function handleLogout() {
        await AsyncStorage.clear()

        navigation.navigate('routeLogin')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={styles.logo} source={logo}></Image>
            </TouchableOpacity>

            <View style={styles.cardsContainer}>
                {users.map((user: any, index) => (
                    <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                        <Image style={styles.avatar} source={{ uri: user.avatar }}></Image>

                        <View style={styles.footer}>
                            <Text style={styles.name}>{user.name}</Text>
                            <Text numberOfLines={3} style={styles.bio}>{user.bio}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={[styles.buttonsContainer, {opacity: (!matchDev && users.length > 0) ? 1 : 0}]}>
                <TouchableOpacity style={styles.button} onPress={handleDislike}>
                    <Image source={dislike} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Image source={like} />
                </TouchableOpacity>
            </View>

            {
                matchDev && (
                    <View style={[styles.matchContainer, {zIndex: users.length + 1}]}>
                        <Image style={styles.matchImage} source={itsmatch}></Image>
                        <Image style={styles.matchAvatar} source={{ uri: matchDev.avatar }}></Image>

                        <Text style={styles.matchName}>{matchDev.name}</Text>
                        <Text style={styles.matchBio}>{matchDev.bio}</Text>

                        <TouchableOpacity onPress={() => setMatchDev(false)}>
                            <Text style={styles.closeMatch}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </SafeAreaView>
    )
}