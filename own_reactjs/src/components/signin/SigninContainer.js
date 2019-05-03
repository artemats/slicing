import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SigninForm } from "./SigninForm";
import { loginUser } from "../../store/SignIn/actions";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class SigninContainer extends Component {

    render() {

        return (
            <Paper className="defaultFormWrap">
                <Typography variant="h2" gutterBottom>
                    Sign in
                </Typography>
                <SigninForm loginUser={this.props.loginUser} history={this.props.history} />
            </Paper>
        );

    }

}

const mapStateToProps = (state) => {

  return {};

};

const mapDispatchToProps = {

    loginUser: loginUser

};

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);