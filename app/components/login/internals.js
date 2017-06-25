const internals = {
    handleChange(event) {
        this.setState({name: event.target.value});
    },
    submitLogin(event) {
        event.preventDefault();
        this.props.handler(this.state.name)
        this.setState({name: ''});
    }
};

export default internals;