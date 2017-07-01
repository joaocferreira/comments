import React from 'react';
import Comment from './comment/comment-container.jsx'

const Comments = (props) => {
    props = props.self;
    const state = props.state;

    return (
        <div>
             <nav className="nav blue accent-2">
                <div className="nav-wrapper">
                    <div className="container">
                        <ul>
                            <li><a href="#"><span className="lnr lnr-users"></span></a></li>
                            <li><a href="#"><span className="lnr lnr-menu"></span></a></li> 
                        </ul>
                        <ul className="right">
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span></a></li>                    
                            <li><a href="#"><span className="lnr lnr-phone"></span></a></li>
                            <li><a href="#">
                                <img src="http://pngimg.com/uploads/face/face_PNG5669.png" alt="" className="user__img circle responsive-img" />  
                            </a></li>                
                        </ul>
                    </div>
                </div>
            </nav>
                <div className="container">
                    <div className="card">
                        <div className="card-content grey lighten-4 comments__header">
                            <p>{state.user.name}</p>
                            <a className="btn-floating btn-large halfway-fab green lighten-1">
                                <i className="material-icons">chat_bubble_outline</i>
                            </a>
                        </div>
                        <div className="card-content">
                            <br />
                            <div className="divider"></div>
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
                        </div>
                        <form action="" className="card-content grey lighten-4">
                            <div className="row">
                                <div className="col s10">
                                    <input
                                        type="text"
                                        value={state.inputValue}
                                        className="comments__input"
                                        onChange={props.handleChange}/>
                                </div>
                                <div className="col s2">  
                                    <button onClick={props.submitComment} className="btn waves-effect waves-light blue accent-2">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>                
                </div>
        </div>
    )
}

export default Comments;