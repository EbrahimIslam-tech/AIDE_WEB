import React from 'react';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Badge, IconButton, Avatar } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Header.css';

const Header = () => {
    return (
        <nav className="header__container">
            <div className="header__logo">
                <p className="header__aideName">aide</p>
                <p className="header__moto">Enjoy Peace in Shopping</p>
            </div>
            <form className="header__searchBar">
                <input 
                    placeholder="Search your products(Example: Mustard Oil, Shorishar Tel)"
                    className="header__inputElem"
                />
            </form>
            <div className="header__notifyIcon">
                <IconButton>
                    <Badge 
                        badgeContent={10} 
                        color="primary"
                    >
                        <NotificationsNoneRoundedIcon 
                            fontSize="medium"
                        />
                    </Badge>
                </IconButton>
            </div>
            <p className="header__profileName">Mahabub Rashel</p>
            <Avatar 
                alt="Mahabub Rashel"
                src="#?"
                sx={{ width: 40, height: 40 }}
                style={{ marginLeft: '10px' }}
            />
        </nav>
    )
}

export default Header;