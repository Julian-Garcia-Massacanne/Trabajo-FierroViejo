import express from 'express';
import {register} from './backend.js';

var routerServer = express.Router();

routerServer.post('/register', function(req, res){
    let user = register(req.body.Name, req.body.Surname, req.body.DNI, req.body.Mail, req.body.Date, req.body.Password, 1);
    if(user.error){     
        res.status(400).json(user);
    } else {
        //res.json(user); ahora va sql
        res.send(user);
    }
});

routerServer.get('/prueba', (req, res) =>{
    res.send('holaaa');
})

routerServer.get('/', (req, res) =>{
    res.send('Hola mundo');
});



export default routerServer;