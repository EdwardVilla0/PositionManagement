import { Avatar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
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