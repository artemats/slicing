import React, { Component } from 'react';
import { RegistrationForm } from "./RegistrationForm";

import { connect } from 'react-redux';
import { setEmailText, setPasswordText, setRepeatPasswordText } from '../store/Registration/actions'

class RegistrationContainer extends Component{

    render(){

        return <RegistrationForm
            email={this.props.email}
            password={this.props.password}
            repeadPassword={this.props.repeatPassword}
            setEmailText={this.props.setEmailText}
            setPasswordText={this.props.setPasswordText}
            setRepeatPasswordText={this.props.setRepeatPasswordText}
        />

    }

}

const mapStateToProps = state => {

    return{
        email: state.registrationReducer.email,
        password: state.registrationReducer.password,
        repeatPassword: state.registrationReducer.repeatPassword
    };

};

const mapDispatchToProps = {

    setEmailText: setEmailText,
    setPasswordText: setPasswordText,
    setRepeatPasswordText: setRepeatPasswordText

};



export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);