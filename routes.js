import express from 'express';
/*import {joinCarrera, joinCarreraExistente, play, poll } from './controllers/controladorFinal.js';

var routerServer = express.Router();
routerServer.post('/carrera/board', joinCarrera); //  ingresa jugador 1
routerServer.patch('/carrera/board/:boardId', joinCarreraExistente);  // ingresa jugador 2    
routerServer.post('/carrera/board/:boardId', play);
routerServer.get('/carrera/board/:boardId', poll);
*/

var routerServer = express.Router();

routerServer.post('/register', function(req, res){
    let user = register();
    if(user.error){
        res.status(400).json(user);
    } else {
        res.json(user);
    }
});



routerServer.get('/login', login);



export default routerServer;