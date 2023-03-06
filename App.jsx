import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

const Stack = createNativeStackNavigator();

import SplashScreen from './src/screen/SplashScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import HomeScreen from './src/screen/HomeScreen';

axios.defaults.withCredentials = true

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;