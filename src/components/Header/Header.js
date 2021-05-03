import { Avatar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Accounts from '../Accounts/Accounts';
import Benefits from '../Benefits/Benefits';
import Employees from '../Employees/Employees';
import Miscellaneous from '../Miscellaneous/Miscellaneous';
import PositionControl from '../PositionControl/PositionControl';
import Timesheets from '../Timesheets/Timesheets';
import './Header.css';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    const showEmployeesPage = (e) => {
        console.log("testing e")
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="header__middle">
                <Button onClick={showEmployeesPage}>Employees</Button>
                <Button>PositionControl</Button>
                <Button>Timesheets</Button>
                <Button>Accounts</Button>
                <Button>Benefits</Button>
                <Button>Miscellaneous</Button>

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