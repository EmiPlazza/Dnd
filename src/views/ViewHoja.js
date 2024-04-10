import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, Alert, Text, FlatList } from 'react-native';
import Carousel from 'pinar';
import { Button, useTheme, FAB, Portal, Provider } from 'react-native-paper';
import { LoadingModal } from "react-native-loading-modal";
import  ControllerHoja  from '../controllers/ControllerHoja';

const ViweHoja = ({ route }) => {
  return (
    <SafeAreaView>
       <Text>Pagina de Hoja</Text>
    </SafeAreaView>
  );
  };
  
  
export default ViweHoja;

