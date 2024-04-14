import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, Text, StyleSheet , RefreshControl, ScrollView, ImageBackground} from 'react-native';
import  ControllerHoja  from '../controllers/ControllerHoja';
import { SafeAreaView } from 'react-native-safe-area-context';



const ViewListado = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <Text>Pagina de listado</Text>
    </SafeAreaView>
  );
};

export default ViewListado;
