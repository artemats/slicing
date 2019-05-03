import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignupForm } from "./SignupForm";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { setUserData } from "../../store/UserData/actions";
import { loginUser } from "../../store/SignIn/actions";

class SignupContainer extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <Paper className="defaultFormWrap">
                <Typography variant="h2" gutterBottom>
                    Sign up
                </Typography>
                <SignupForm setUserData={this.props.setUserData} loginUser={this.props.loginUser} history={this.props.history} />
            </Paper>
        );

    }

}

const mapStateToProps = (state) => {

    return {};

};

const mapDispatchToProps = {

    setUserData: setUserData,
    loginUser: loginUser

};

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);