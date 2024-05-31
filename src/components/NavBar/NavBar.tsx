import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to={'profile'}>Profile</Link>
            </div>
            <div>
                <Link to={'home'}>Home</Link>
            </div>
            <div>
                <Link to={'messenger'}>Messages</Link>
            </div>
            <div>
                <Link to={'settings'}>Settings</Link>
            </div>
        </nav>
    );
}

export default NavBar;
