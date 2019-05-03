import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class AuthForm extends Component{

    constructor(props) {
        super(props);

        this.onChangeEmailText = this.onChangeEmailText.bind(this);
        this.onChangePasswordText = this.onChangePasswordText.bind(this);
    }

    onChangeEmailText(event) {

        this.props.setEmailText(event.target.value);

    }

    onChangePasswordText(event) {

        this.props.setPasswordText(event.target.value)

    }

    render() {

        const { email, password } = this.props;

        return(
            <Paper className="defaultFormWrap">
                <Typography variant="h5" component="h3">
                    Sign In
                </Typography>
                <form autoComplete="off">
                    <TextField
                        label="E-mail"
                        value={email}
                        onChange={this.onChangeEmailText}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={this.onChangePasswordText}
                        margin="normal"
                        fullWidth
                    />
                    <div className="form-action">
                        <Button variant="contained" color="primary" type="submit">
                            Sign in
                        </Button>
                    </div>
                </form>
            </Paper>
        )

    }

}