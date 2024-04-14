import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewListado from './src/views/ViewListado';
import ViewHoja from './src/views/ViewHoja';
import ViweHoja from './src/views/ViewHoja';
import ViewHome from './src/views/ViewHome';
import { AntDesign,Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

const MyStack=()=>{
  return(
    <HomeStackNavigator.Navigator
      initialRouteName="Home"
      >
      <HomeStackNavigator.Screen
          name='HomeScreen'
          component={ViewHome}
          options={{
            headerBackTitleVisible:false,
            headerShown:false,
          }}
      />
      <HomeStackNavigator.Screen
          name='Hoja'
          component={ViweHoja}
          options={{
            headerBackTitleVisible:false,
          }}
      />
      <HomeStackNavigator.Screen
          name='Listado'
          component={ViewListado}
          options={{
            headerBackTitleVisible:false,
          }}
      />
    </HomeStackNavigator.Navigator>
  )
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}>
      <Tab.Screen name='Home' 
        component={MyStack}
        options={{
          headerShown:false,   // Para ocultar la cabecera de cada pantalla
          tabBarIcon: ({color,size}) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}/>
      <Tab.Screen name='Hoja' component={ViweHoja} 
      options={{
        tabBarIcon: ({color,size}) => (
          <Ionicons name="person" size={24} color={color} />
        )
      }}/>
      <Tab.Screen name='Listado' component={ViewListado}
      options={{
        tabBarIcon: ({color,size}) => (
          <AntDesign name="book" size={24} color={color} />
        )
      }}/>
    </Tab.Navigator>
  );
};

export default function Navegacion(){
  return(
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

