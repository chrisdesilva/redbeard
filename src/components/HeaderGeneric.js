import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/images/logo.png'

const HeaderGeneric = (props) => (
    <header id="header">
      <span className="logo"><Link to="/"><img src={logo} style={{maxWidth: '15%', borderRadius: '50%'}} alt="Redbeard Productions logo" /></Link></span>
    </header>
)

export default HeaderGeneric
