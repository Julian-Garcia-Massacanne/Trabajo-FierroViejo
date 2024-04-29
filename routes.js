import express from 'express';

var routerServer = express.Router();

routerServer.post('/register', function(req, res){
    let user = register();
    if(user.error){     
        res.status(400).json(user);
    } else {
        res.json(user);
    }
});

routerServer.get('/prueba', (req, res) =>{
    res.send('holaaa');
})

routerServer.get('/', (req, res) =>{
    res.send('Hola mundo');
});



export default routerServer;