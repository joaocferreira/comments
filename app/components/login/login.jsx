import React from 'react';

const Login = (props) => {
    props = props.self;
    const state = props.state;
    return (
        <div>
            <form action="">
                <input
                    type="text"
                    value={state.name}
                    className="login__input"
                    onChange={props.handleChange}/>
                <button onClick={props.submitLogin}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Login;