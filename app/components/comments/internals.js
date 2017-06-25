import axios from 'axios';
import socket from './socketEvents';

const internals = {
  handleChange(event) {
    this.setState({inputValue: event.target.value});
    this
      .socket
      .emit('imTyping', {
        user: this.state.user.name,
        hasInput: event.target.value
      });
  },
  componentDidMount() {
    this.socket = socket(this);
    axios
      .get('/comments')
      .then(response => this.setState({comments: response.data.comments}));
  },
  updateComment() {
    debugger
    this.setState({editing: true});
  },
  submitComment(event) {
    event.preventDefault();
    this
      .socket
      .emit('comment', {
        comment: this.state.inputValue
      });
    this.setState({inputValue: ''});
  }
};

export default internals;