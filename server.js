const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const {Server} = require('socket.io');
const path = require('path');

app.use(express.static('client/build'));
/////-------------
const io = new Server(expressServer);


app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
})


io.on('connection', function(socket){
    console.log('New User Connected');

    socket.on('disconnect', function(){
        console.log('User Disconnected');
    })
})


expressServer.listen(5000, function(){
    console.log('Server Running Port: 5000')
})