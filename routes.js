import express from 'express';
import {register} from './backend.js';



var routerServer = express.Router();

routerServer.get('/manuel', (req, res) => {
    res.send('Holaaa');
});

routerServer.post('/register', function(req, res){
    let user = register(req.body.name, req.body.surname, req.body.dni, req.body.mail, req.body.date, req.body.password, 1);
    res.send('alta exitosa');
});

routerServer.get('/prueba', (req, res) =>{
    res.send('holaaa');
})

routerServer.get('/', (req, res) =>{
    res.send('Hola mundo');
});



export default routerServer;