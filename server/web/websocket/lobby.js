module.exports = (server) => {
    var io = require('socket.io')(server);
    var nsp = io.of('/lobby');

    nsp.on("connection", socket => {
        console.log("nsp user connected")
        socket.emit('hi', "lobby")

        socket.on('join', lobbyId => {
            console.log("client joined: ", lobbyId)
            socket.join(lobbyId)
        })

        socket.on('leave', lobbyId => {
            console.log("client left: ", lobbyId)
            socket.leave(lobbyId)
        })
        
    })


    io.on('connection', socket => {
    console.log('a user connected');
    socket.emit('hi', "default")
    
    socket.on('disconnect', reason => {
        console.log('user disconnected');
    });

    socket.on('room', data => {
        console.log('room join');
        console.log(data);
        socket.join(data.room);
    });

    socket.on('leave room', data => {
        console.log('leaving room');
        console.log(data);
        socket.leave(data.room)
    });

    socket.on('new message', data => {
        console.log(data.room);
        socket.broadcast
        .to(data.room)
        .emit('receive message', data)
    });
    });

}