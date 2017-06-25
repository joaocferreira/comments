import io from 'socket.io-client';

const socket = io();

function socketEvents(template) {
  socket
    .on('updateComments', function (comments) {
      console.log(comments);
      template.setState({comments});
    });
  return socket;
}
export default socketEvents;