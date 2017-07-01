import React from 'react';

const Comment = (props) => {
    const state = props.self.props.self;
    const comment = state.comment;
    const isMyComment = comment.user === state.myUser;
    const now = + new Date();
    const canIEdit = isMyComment && (now - comment.time <= (5000 * 60 ));
    return (
        <li className="row">
            <span className={`col s1 lnr ${isMyComment ? 'lnr-user' : 'lnr-earth'}`}></span>
            <span className="col s8">
                <p><strong>{comment.user}</strong></p>
                <p>{comment.comment}</p>
            </span>
            <i className="col s2">{new Date(comment.time).toLocaleTimeString()}</i>
            {canIEdit ? <span className="col s1 lnr lnr-pencil"></span> : ''}
        </li>
    )
}

export default Comment;