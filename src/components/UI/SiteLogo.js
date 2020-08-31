// Simple component for site logo:
import React from 'react'
import logo from '../../img/logo.png'

const SiteLogo = () => {
    return (
        // JSX that renders our logo img:
        <header className="Logo">
            <img src={logo} alt='' />
        </header>
    )
}

export default SiteLogo
