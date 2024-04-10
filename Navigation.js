import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PantallaPrincipal from './src/views/ViewListado';
import Login from './src/views/Login';
import LoginController from './src/controllers/LoginController';

const Stack = createStackNavigator();

const Navigation = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const userLoggedIn = await LoginController.getAuthenticatedUser();
        setIsLoggedIn(userLoggedIn);
      
      setCheckingAuth(false);
    } catch (error) {
      console.error('Error retrieving authenticated user:', error);
      setCheckingAuth(false);
    }
  };

  if (checkingAuth) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="listado" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="hoja" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default Navigation;
