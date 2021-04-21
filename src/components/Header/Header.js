import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import Benefits from '../Benefits/Benefits';
import Employees from '../Employees/Employees';
import PositionControl from '../PositionControl/PositionControl';
import Timesheets from '../Timesheets/Timesheets';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className="header__middle">
                <Employees />
                <PositionControl />
                <Timesheets />
                <Benefits />
            </div>
            <div className="header__right">
                <IconButton >
                    <Avatar src="" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header