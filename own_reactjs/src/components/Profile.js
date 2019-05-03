import React, { Component } from 'react';
import { connect } from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Profile extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const { id, login, email, password } = this.props.userData;

        return(
            <div>
                <Paper className="profile-container">
                    <Typography variant="h2" component="h2">
                        Profile page
                    </Typography>
                    <Divider light className="profile-divider" />
                    <Typography variant="h4" component="h4">
                        Welcome { login }
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Login</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Password</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">{id}</TableCell>
                                <TableCell align="right">{login}</TableCell>
                                <TableCell align="right">{email}</TableCell>
                                <TableCell align="right">{password}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        userData: state.userDataReducer
    }

};

export default connect(mapStateToProps)(Profile);