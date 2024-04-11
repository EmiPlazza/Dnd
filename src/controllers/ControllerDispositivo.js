import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';

const DispositivoController = {
    
    obtenerIdDispositivo: () => {
        let idDispositivo;

    if (Platform.OS === 'ios') {
      idDispositivo = Constants.platform.ios.model;
    } else if (Platform.OS === 'android') {
      idDispositivo = Device.modelId;
    } else {
      idDispositivo = 'ID no disponible en esta plataforma';
    }

    return idDispositivo;
  }
};

export default DispositivoController;