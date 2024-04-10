import { ModelHojaPersonaje } from "../models/ModelHojaPersonaje";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DispositivoController from './ControllerDispositivo';



 const hojaController = {

  obtenerHojaPorId: async (Id) => {
    await hojasModel.guardarTemplateshojasEnBD(Id);
  },

  obtenerTodosLosHojas: async () => {
    try {
      const hoja = await hojasModel.obtenerTodosLosTemplateshojas();
      const hojasConObjetoParseado = hoja.map(hoja => ({
        ...hoja,
        objeto: JSON.parse(hoja.objeto)
      }));
      return hojasConObjetoParseado || [];
    } catch (error) {
      console.error('Error al obtener hojas: ',error);
      return [];
    }
  },
  

  guardarNuevahoja: async (hojaNueva) => {
    try {

    } catch (error) {
      console.error('Error al guardar nueva hoja: ', error);
      return false; 
    }
  }


};

export default hojaController