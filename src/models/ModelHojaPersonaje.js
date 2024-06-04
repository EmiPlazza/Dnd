import db from './database';
import hojasJson from './hojasJson.json';

export const ModelHojaPersonaje = {

  obtenerTodosLosHojas: () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Hojas',
          [],
          (_, results) => {
            const len = results.rows.length;
            const Hojas = [];
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              Hojas.push(row); 
            }
            resolve(Hojas);
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  },

  obtenerHojaPorId: (id) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM Hojas WHERE idHoja = ?',
          [id],
          (_, results) => {
            if (results.rows.length > 0) {
              resolve(results.rows.item(0)); 
            } else {
              resolve(null); 
            }
          },
          (_, error) => {
            reject(error); 
          }
        );
      });
    });
  },

  obtenerTodosLosHojasDesdeJson: () => {
    return new Promise((resolve) => {
      resolve(hojasJson);
    });
  },

  obtenerHojaPorIdDesdeJson: (id) => {
    return new Promise((resolve) => {
      const hoja = hojasJson.find(item => item.id === id);
      resolve(hoja || null);
    });
  },
};
