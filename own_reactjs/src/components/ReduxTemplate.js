import React, { Component } from 'react';

import RegistrationContainer from '../components/RegistrationContainer';
import AuthContainer from '../components/AuthContainer';

import Grid from '@material-ui/core/Grid';

class ReduxTemplate extends Component {

    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={6} className="card-item">
                        <AuthContainer />
                    </Grid>
                    <Grid item xs={6} className="card-item">
                        <RegistrationContainer />
                    </Grid>
                </Grid>
            </div>
        )

    }

}

export default ReduxTemplate;