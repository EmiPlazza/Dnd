// database.js
import * as SQLite from 'expo-sqlite';

// Abre la conexión a la base de datos
const db = SQLite.openDatabase('database.db');

export default db;