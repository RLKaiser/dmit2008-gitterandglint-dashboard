import React from 'react';
import { Link } from 'react-router-dom';

import { AppBarStyles, AppBarItems, AppBarItem } from './styles';
import { MdEmail } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoKebabVertical } from 'react-icons/go';
import CrystalShopLogo from '../../static/CrystalShopLogo.png'

function AppBar(props) {
    return ( 
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                    <img src={ CrystalShopLogo } alt="Crystal Shop Logo" />
                    <Link to="/dashboard">Glitter & Glint Crystals</Link>
                </AppBarItem>
                <div>
                    <AppBarItem><MdEmail/></AppBarItem>
                    <AppBarItem><IoIosNotifications/></AppBarItem>
                    <AppBarItem><BsFillPersonFill/></AppBarItem>
                    <AppBarItem><GoKebabVertical/></AppBarItem>
                </div>
            </AppBarItems>
        </AppBarStyles>
     );
}

export default AppBar;