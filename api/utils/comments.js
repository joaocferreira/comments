const comments = (() => {
    const listComments = [];
    const queueComments = {};
    return {
        add(comment) {
            comment.time = + new Date();
            listComments.push(comment)
            return listComments;
        },
        get() {
            return listComments;
        },
        update(finishTyping) {
            const idx = queueComments[finishTyping.socketId];
            const comment = Object.assign(Object.create(null), listComments[idx], finishTyping.comment);
            listComments.splice(idx, 1, comment);
            delete queueComments[finishTyping.socketId];                        
            return listComments;
        },
        queue(imTyping) {
            if(queueComments.hasOwnProperty(imTyping.socketId)) {
                return;
            }
            queueComments[imTyping.socketId] = listComments.length;
            const comment = {
                user: imTyping.user,
                comment: 'Is typing'
            };
            return this.add(comment);
        },
        clearQueue(socketId) {
            listComments.splice(queueComments[socketId], 1);
            delete queueComments[socketId];      
            return listComments;
        }
    }
});

module.exports = comments;