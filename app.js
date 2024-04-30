'use strict'
import express from 'express';
import routerServer from './routes.js';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 8000



// Abre una conexión con la base de datos
let db = new sqlite3.Database('mi_base_de_datos.db', (err) => {
  if (err) {
    console.error('Error al abrir la base de datos', err.message);
  } else {
    console.log('Conexión exitosa con la base de datos');
  }
});


app.use(express.static('public'));


app.use(express.json());
app.use('/', routerServer);

app.listen(PORT, () =>{
    console.log(`Server running in htpp://localhost:8000`);
});

export default db;
