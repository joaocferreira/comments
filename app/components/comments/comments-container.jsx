import React from 'react';
import internals from './internals';
import Comments from './comments.jsx';

const state = {
  inputValue: '',
  comments: [],
  editing: false
};

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(Object.create(null), props.state, state);
    
    for (let key in internals) {
      if (internals.hasOwnProperty(key)) {
        this[key] = internals[key].bind(this);
      }
    }
  }
  render() {
    return (<Comments self={this}/>)
  }
}

export default CommentsContainer;