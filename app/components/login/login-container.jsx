import React from 'react';
import internals from './internals';
import Login from './login.jsx';


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    for (let key in internals) {
      if (internals.hasOwnProperty(key)) {
        this[key] = internals[key].bind(this);
      }
    }
  }
  render() {
    return (
      <Login self={this} />
    )
  }
}

export default LoginContainer;