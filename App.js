import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import ComponenteParaLeerArchivoYGuardarEnBDUsuarios from './src/views/cargas/cargaUsuarios';
import ComponenteParaLeerEncuestas from './src/views/cargas/cargarEncuestas';
import { MD3LightTheme as DefaultTheme, PaperProvider,} from 'react-native-paper';
import themeJson from './src/estilos/themes.json';


import ComponenteParaBorrarTablas from './src/views/cargas/borrarTablas';
import TablasModel from './src/models/testTablas';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

// const theme = themeJson ;

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const nombresDeTablas = await TablasModel.listarTablas();
        
      } catch (error) {
        console.error('Error al obtener nombres de tablas desde App:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <PaperProvider theme={theme}>
      <Navigation />
      </PaperProvider>
              {/* <ComponenteParaBorrarTablas /> */}
        <ComponenteParaLeerArchivoYGuardarEnBDUsuarios />
        <ComponenteParaLeerEncuestas />
    </>
  );
}
