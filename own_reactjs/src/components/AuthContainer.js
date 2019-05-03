import React, { Component } from 'react';
import { AuthForm } from "./AuthForm";
import { connect } from 'react-redux';

import { setEmailText, setPasswordText } from '../store/Auth/actions'

class AuthContainer extends Component{

    render(){

        return <AuthForm
            email={this.props.email}
            password={this.props.password}
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}
        />

    }

}

const mapStateToProps = state => {

    return {
        email: state.authReducer.email,
        password: state.authReducer.password
    };

};

const mapDispatchToProps = {

    setEmailText: setEmailText,
    setPasswordText: setPasswordText

};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);