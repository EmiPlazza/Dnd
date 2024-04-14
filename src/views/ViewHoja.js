import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, Alert, Text, FlatList } from 'react-native';
import Carousel from 'pinar';
import {  useTheme, FAB, Portal, Provider } from 'react-native-paper';
import { LoadingModal } from "react-native-loading-modal";
import  ControllerHoja  from '../controllers/ControllerHoja';
import { SafeAreaView } from 'react-native-safe-area-context';

const ViweHoja = ({ route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <Text>Pagina de Hoja</Text>
      
    </SafeAreaView>
  );
  };
  
  
export default ViweHoja;

