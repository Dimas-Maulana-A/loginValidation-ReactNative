import {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');
  const [token, setToken] = useState('');
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const Datas = await AsyncStorage.getItem('@storage_data');
    const Tokens = await AsyncStorage.getItem('@storage_token');
    if (Tokens === null && Datas === null) {
      navigation.navigate('Login');
    } else {
      setData(await AsyncStorage.getItem('@storage_data'));
      setToken(await AsyncStorage.getItem('@storage_token'));
    }
  };

  const Logout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.homeHeaders}>Home Screen</Text>

        <Text style={styles.label}>Token :</Text>
        <View style={styles.Box}>
          <Text>{token}</Text>
        </View>
        <Text style={styles.label}>Data :</Text>
        <View style={styles.Box}>
          <Text>{data}</Text>
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => Logout()}>
          <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  homeHeaders: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },

  label: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20
  },

  Box: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#fafafa'
  },

  Button: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#95959570',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },

  textButton: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
