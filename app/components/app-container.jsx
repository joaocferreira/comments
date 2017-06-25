import React from 'react';
import Comments from './comments/comments-container.jsx';
import Login from './login/login-container.jsx';

class AppContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {}
    };
    this.handler = this.handler.bind(this);
  }
  handler(name) {
    this.setState({user: {
        name
    }});
  }

  render() {
    let template = !this.state.user.name ? <Login handler={this.handler}/> : <Comments state={this.state}/>;
    return (
      template
    )
  }
}
export default AppContainer;