import React from 'react';
import './Header.css'
import Logo from '../../assests/images/logo.png'
export default function Header() {
    return (
        <div className='header-container'>
            <div className="hear-container__logo">
                <img src={Logo} alt={"Logo"} className='logo'/>
            </div>
        </div>
    )
}
