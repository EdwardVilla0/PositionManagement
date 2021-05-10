import { Avatar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

import { useHistory } from "react-router-dom";

import './Header.css';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    const history = useHistory();
    const toHome = () => history.push('/');
    const toEmployees = () => history.push('/employees');
    const toPositionControl = () => history.push('/positioncontrol');
    const toTimesheets = () => history.push('/timesheets');
    const toAccounts = () => history.push('/accounts');
    const toBenefits = () => history.push('/benefits');
    const toMiscellaneous = () => history.push('/miscellaneous');


    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="header__middle">
                <Button onClick={toHome}>Home</Button>
                <Button onClick={toEmployees}>Employees</Button>
                <Button onClick={toPositionControl}>PositionControl</Button>
                <Button onClick={toTimesheets}>Timesheets</Button>
                <Button onClick={toAccounts}>Accounts</Button>
                <Button onClick={toBenefits}>Benefits</Button>
                <Button onClick={toMiscellaneous}>Miscellaneous</Button>

            </div>
            <div className="header__right">
                <IconButton onClick={logoutOfApp}>
                    <Avatar src="" >
                        {user?.email[0]}
                    </Avatar>
                </IconButton>
            </div>
        </div>
    )
}

export default Header