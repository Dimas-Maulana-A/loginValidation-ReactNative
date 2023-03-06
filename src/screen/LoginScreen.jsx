import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import {Api} from '../components/environtment';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    SuccessLogin()
  }, []);

  const SuccessLogin = async() => {
    const Token = await AsyncStorage.getItem('@storage_token')
    const Data = await AsyncStorage.getItem('@storage_data')
    if(Token !== null && Data !== null){
      navigation.navigate('Home')
    }
  }

  const Login = async e => {
    e.preventDefault();
    if (!email) {
      alert('please fill email');
      return;
    } else if (!passw) {
      alert('please fill password');
      return;
    } else {
      await axios
        .post(Api + 'users/login', {
          email: email,
          password: passw,
        })
        .then(async result => {
          await AsyncStorage.setItem('@storage_data', JSON.stringify(result.data.data));
          await AsyncStorage.setItem('@storage_token', result.data.token);
          // console.log(JSON.stringify(res.data.data))
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.response) {
            setMessage(error.response.data.message);
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>LOGIN PAGE</Text>

      <Text style={styles.errorMessage}>{message}</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.InputData}
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="masukkan email"
        />
        <TextInput
          style={styles.InputData}
          value={passw}
          onChangeText={text => setPassw(text)}
          placeholder="masukkan password"
        />
      </View>

      <View>
        <TouchableOpacity style={styles.buttonLogin} onPressIn={Login}>
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textButtonLogin}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },

  textLogin: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },

  errorMessage: {
    textAlign: 'center',
    color: 'red',
  },

  containerInput: {
    paddingHorizontal: 30,
  },

  InputData: {
    fontSize: 18,
    marginVertical: 10,
    borderBottomWidth: 1,
  },

  buttonLogin: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#95959570',
    marginVertical: 10,
    marginHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 8,
  },

  textButtonLogin: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
