import { ModelHojaPersonaje } from "../models/ModelHojaPersonaje";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DispositivoController from './ControllerDispositivo';

const hojaController = {

  obtenerHojaPorId: async (id) => {
    try {
      // Obtener hoja por ID desde la base de datos
      const hoja = await ModelHojaPersonaje.obtenerHojaPorId(id);
      return hoja || null;
    } catch (error) {
      console.error('Error al obtener hoja por ID: ', error);
      return null;
    }
  },

  obtenerTodosLosHojas: async () => {
    try {
      // Obtener todas las hojas desde la base de datos
      const hojas = await ModelHojaPersonaje.obtenerTodosLosHojas();
      return hojas || [];
    } catch (error) {
      console.error('Error al obtener todas las hojas: ', error);
      return [];
    }
  },

  obtenerTodasHojasJson: async () => {
    try {
      // Obtener todas las hojas desde el archivo JSON
      const hojasJson = await ModelHojaPersonaje.obtenerTodosLosHojasDesdeJson();
      return hojasJson || [];
    } catch (error) {
      console.error('Error al obtener todas las hojas desde JSON: ', error);
      return [];
    }
  },

  obtenerHojaPorIdJson: async (id) => {
    try {
      // Obtener hoja por ID desde el archivo JSON
      const hojaJson = await ModelHojaPersonaje.obtenerHojaPorIdDesdeJson(id);
      return hojaJson || null;
    } catch (error) {
      console.error('Error al obtener hoja por ID desde JSON: ', error);
      return null;
    }
  },

  guardarNuevahoja: async (hojaNueva) => {
    try {
      // Guardar nueva hoja en la base de datos
      // Aquí debes implementar la lógica para guardar la nueva hoja
    } catch (error) {
      console.error('Error al guardar nueva hoja: ', error);
      return false; 
    }
  }

};

export default hojaController;
