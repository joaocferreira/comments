import React from 'react';

const Comment = (props) => {
    const state = props.self.props.self;
    const comment = state.comment;
    const isMyComment = comment.user === state.myUser;
    const now = + new Date();
    const canIEdit = isMyComment && (now - comment.time <= (5000 * 60 ));
    return (
        <li className={`lnr ${isMyComment ? 'lnr-user' : 'lnr-earth'}`}>
            <span>{comment.user}</span>
            {comment.comment}
            <i>{new Date(comment.time).toLocaleTimeString()}</i>
            {canIEdit ? <span className="lnr lnr-pencil"></span> : ''}
        </li>
    )
}

export default Comment;