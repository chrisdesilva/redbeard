import React from 'react'
import banner from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={banner} alt="Redbeard Productions logo" /></span>
    </header>
)

export default Header
