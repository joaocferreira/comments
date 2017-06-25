import React from 'react';
import Comment from './comment/comment-container.jsx'

const Comments = (props) => {
    props = props.self;
    const state = props.state;

    return (
        <div>
            <h2>comments</h2>
            <p>{state.user.name}</p>
            <ul id="messages">
                {state.comments && state
                    .comments
                    .map((comment, idx) => {
                        const self ={
                            comment,
                            myUser: state.user.name
                        }
                        return <Comment key={idx} self={self}/>;
                })}
            </ul>
            <form action="">
                <input
                    type="text"
                    value={state.inputValue}
                    className="comments__input"
                    onChange={props.handleChange}/>
                <button onClick={props.submitComment}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Comments;