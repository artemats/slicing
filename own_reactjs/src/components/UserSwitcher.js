import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { loginUser } from "../store/SignIn/actions";

class UserSwitcher extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: true,
            anchorEl: null,
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);

    }

    handleMenu (event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose () {
        this.setState({ anchorEl: null });
    };


    handleSignOut() {

        this.props.loginUser(false);

        this.handleClose();

    }


    render() {

        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

       return (
           <div className="log-switcher">
               <IconButton
                   aria-owns={open ? 'menu-appbar' : undefined}
                   aria-haspopup="true"
                   onClick={this.handleMenu}
                   color="secondary"
               >
                   <AccountCircle />
               </IconButton>
               <Menu
                   id="menu-appbar"
                   anchorEl={anchorEl}
                   anchorOrigin={{
                       vertical: 'top',
                       horizontal: 'right',
                   }}
                   transformOrigin={{
                       vertical: 'top',
                       horizontal: 'right',
                   }}
                   open={open}
                   onClose={this.handleClose}
               >
                   <MenuItem onClick={this.handleClose}>
                       <NavLink to="/profile">
                           Profile
                       </NavLink>
                   </MenuItem>
                   <MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
               </Menu>
           </div>
       )

    }

}

const mapStateToProps = (state) => {

    return {};

};

const mapDispatchToProps = {

    loginUser: loginUser

};

export default connect(mapStateToProps, mapDispatchToProps)(UserSwitcher);
