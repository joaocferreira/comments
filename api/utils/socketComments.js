const socketComments = ((io, comments) => {
    io
        .on('connection', function (socket) {
            socket
                .on('disconnect', function () {
                    const socketId = socket.id;
                    io.emit('updateComments', comments.clearQueue(socketId));
                });
            socket.on('comment', function (comment) {
                const socketId = socket.id;
                io.emit('updateComments', comments.update({comment, socketId}));
            });
            socket.on('imTyping', function (imTyping) {
                const socketId = socket.id;
                if (imTyping.hasInput) {
                    const list = comments.queue({user: imTyping.user, socketId});
                    list && io.emit('updateComments', list);
                } else {
                    io.emit('updateComments', comments.clearQueue(socketId));                    
                }
            });
        });
});

module.exports = socketComments;