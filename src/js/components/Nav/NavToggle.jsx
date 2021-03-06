import React from 'react';
import { Link } from 'react-router';

import ToggleBtn from './ToggleBtn';


const NavToggle = () => (
    <div className="navbar-header">
        <ToggleBtn/>
        <Link to="/" className="navbar-brand hidden-sm">
            pharmacy online
        </Link>
    </div>
);

export default NavToggle;
