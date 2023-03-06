import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import axios from 'axios';
import {Api} from '../components/environtment';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [passw, setPassw] = useState('');

  const Register = async e => {
    e.preventDefault();
    if (!name) {
      alert('please fill name');
    } else if (!email) {
      alert('please fill email');
    } else if(!passw){
      alert('please fill password');
    } else {
      await axios
        .post(Api + 'users', {
          name: name,
          email: email,
          password: passw
        })
        .then(result => {
          alert('Register success');
          navigation.navigate('Login');
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>REGISTER</Text>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.InputData}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="masukkan name"
        />
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
        <TouchableOpacity style={styles.buttonLogin} onPressIn={Register}>
          <Text style={styles.textButtonLogin}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textButtonLogin}>Login</Text>
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

export default RegisterScreen;
