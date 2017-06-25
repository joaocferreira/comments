'use strict';

const Hapi = require('hapi');
const inert = require('inert');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
const io = require('socket.io')(server.listener);

const comments = require('./utils/comments')()
const socketComments = require('./utils/socketComments.js')(io, comments);

server.register(inert, (err) => {
    if(err){
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/public/{filename}',
        handler: {
            file: function (request) {
                return `./api/public/${request.params.filename}`;
            }
        }
    });
    server.route({
        method: 'GET',
        path: '/app',
        handler: function (request, reply) {
            reply.file('./api/public/index.html');
        }
    });
    server.route({
        method: 'GET',
        path: '/comments',
        handler: function (request, reply) {
            reply({
                comments: comments.get()
            });
        }
    });
});



server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});