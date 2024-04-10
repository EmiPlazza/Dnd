import { UsuariosModel } from "../models/UsuariosModel";
import AsyncStorage from '@react-native-async-storage/async-storage';

 const LoginController = {
  
  login: async (username, password) => {
    try {
      const user = await UsuariosModel.obtenerUsuarioPorNombreYClave(username, password);
      if (user) {
        await LoginController.setAuthenticatedUser(user);
      }
      return user;
    } catch (error) {
      throw new Error('Error de autenticación');
    }
  },

  info: async () => {
    try {
      const user = await AsyncStorage.getItem('usuario');
      if (user) {
        return JSON.parse(user);
      } else {
        throw new Error('No hay información de usuario almacenada');
      }
    } catch (error) {
      throw new Error('Error al obtener información del usuario:', error);
    }
  },

  getAuthenticatedUser: async () => {
    try {
      const user = await AsyncStorage.getItem('usuario');
      if (user) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('Error retrieving authenticated user');
    }
  },

  setAuthenticatedUser: async (user) => {
    try {
      await AsyncStorage.setItem('usuario', JSON.stringify(user));
      console.log('usuario logeado')
    } catch (error) {
      throw new Error('Error setting authenticated user');
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem('usuario');
      console.log('Usuario desconectado');
    } catch (error) {
      console.error('Error al desconectar:', error);
    }
  },

 

  actualziarUsuarios: async () => {
    await UsuariosModel.guardarUsuariosEnBD();
  },
  
};

export default LoginController