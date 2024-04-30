import db from "./app.js"

 //Conectar la base de datos

   

// Crear una Tabla
// db.run(`CREATE TABLE usuarios (
//     dni INTEGER PRIMARY KEY,
//     name TEXT,
//     surname TEXT,
//     mail TEXT,
//     date DATE,
//     password TEXT
//     rol INTEGER
//   )`);



 function register(name, surname, dni, mail, date, password, rol){
     console.log('Hola Planeta')
    let user = {
         dni: dni,
         name: name,
         surname: surname,
         mail: mail,
         date: date,
         password: password,
         rol: rol
     }
     db.run(`INSERT INTO usuarios (dni, name, surname, mail, date, password, rol) VALUES (${dni}, ${name}, ${surname}, ${mail}, ${date}, ${password}, ${rol})`, function(err) {
         if (err) {
           return console.error(err.message);
         }
         console.log(`Se insertó un nuevo usuario con el ID: ${this.lastID}`);
       });

     return user;
 }

export {register};