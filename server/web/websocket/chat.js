module.exports = (server) => {

    var io = require('socket.io')(server);

    const nsp = io.of("/chat") 
    nsp.on('connection', socket => {
        console.log('a user connected');
        
        socket.on('disconnect', reason => {
            console.log('user disconnected');
        });

        socket.on('join', ({ channel }) => {
            if(!channel) {
                console.error(" cannot join channel: ", channel)
            }
            console.log('channel join', channel);
            socket.join(channel);
            socket.emit("confirm join")
        });

        socket.on('leave', ({ channel }) => {
            console.log('leaving room');
            console.log(data);
            socket.leave(channel)
        });

        socket.on('new message', ({ channel, ...data }) => {
            console.log("new message on: ", channel);
            socket.broadcast
            .in(channel)
            .emit('new message', data)
            
            socket.emit('new message', data)
        });

    });
}