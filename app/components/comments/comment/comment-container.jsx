import React from 'react';
import Comment from './comment.jsx';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = props.self;
    }
    render() {
        return (<Comment self={this} />);
    }
}

export default CommentContainer;