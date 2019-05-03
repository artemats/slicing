import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { loadLocalStorageUserData } from "../localStorage/authenticationStorage";
import { deCode } from "../JWTToken/deCode";

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

export class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            haveAccount: true,
            dataIsCorrect: true,
            localUserData: {}
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleLoginUser = this.handleLoginUser.bind(this);
    }

    componentDidMount() {

        this.setState({
            localUserData: deCode(loadLocalStorageUserData())
        });

    }

    handleChangeValue(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleLoginUser(event) {

        event.preventDefault();

        if(this.onValidateForm() ) {

            if( loadLocalStorageUserData() && this.state.email === this.state.localUserData.email && this.state.password === this.state.localUserData.password) {

                this.setState({
                    dataIsCorrect: true
                });

                this.props.loginUser(true);
                this.props.history.push('/profile');

            } else {

                this.setState({
                    dataIsCorrect: false
                });

            }

            this.setState({
                email: '',
                password: '',
                emailError: '',
                passwordError: ''
            });

        }

    }

    onValidateForm() {

        let emailError = '';
        let passwordError = '';


        if(!this.state.email.includes('@')) {

            emailError = 'Email must include "@"';

        }

        if(this.state.password.length < 6) {

            passwordError = 'Password must have more than 6 characters';

        }

        if(emailError || passwordError) {

            this.setState({
                emailError,
                passwordError
            });

            return false;

        }

        return true;

    }

    render() {

        return(
            <form autoComplete="off" onSubmit={this.handleLoginUser}>
                <FormControl error={Boolean(this.state.emailError)} fullWidth>
                    <InputLabel htmlFor="component-error">E-mail</InputLabel>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeValue}
                    />
                    <FormHelperText id="component-error-text">{this.state.emailError}</FormHelperText>
                </FormControl>
                <FormControl error={Boolean(this.state.passwordError)} fullWidth>
                    <InputLabel htmlFor="component-error">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChangeValue}
                    />
                    <FormHelperText id="component-error-text">{this.state.passwordError}</FormHelperText>
                </FormControl>
                <div className="form-action">
                    <Button variant="contained" color="primary" type="submit">
                        Sign in
                    </Button>
                    <p>Don't have account ?</p>
                    <NavLink to="/registration">
                        <Button variant="contained" type="submit">
                            Sign up
                        </Button>
                    </NavLink>
                </div>
                <div className={ this.state.dataIsCorrect ? 'hidden' : 'center' }>
                    <Chip
                        avatar={
                            <Avatar>
                                <FaceIcon />
                            </Avatar>
                        }
                        label={
                            this.state.dataIsCorrect
                                ? 'You don\'t have an account! Try sign up'
                                : 'E-mail or password are not correct'
                        }
                        color="secondary"
                    />
                </div>
            </form>
        )

    }

}