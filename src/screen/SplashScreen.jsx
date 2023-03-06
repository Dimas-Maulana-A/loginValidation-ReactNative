import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'

const SplashScreen = ({navigation}) => {
  
    useEffect(()=> {
      setTimeout(()=> navigation.navigate('Home'), 3000)
    }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.textSplash}>WELCOME</Text>
      <Text style={styles.textHSplash}>This is Splash Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    textSplash: {
        textAlign: 'center',
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textHSplash: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SplashScreen