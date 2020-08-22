// A functional component that simply places our logo in the 'Header' component:
import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        // Simple JSX that renders our logo img:
        <header className="center">
            <img src={logo} alt='' />
        </header>
    )
}

export default Header
