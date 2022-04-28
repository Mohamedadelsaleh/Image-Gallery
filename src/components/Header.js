import React from 'react'
import logo from '../images/logo.png'
import Main from '../images/1.png'
const Header = () => {
    return (
        <header className="center">
            <img src={logo} alt="Logo" />
            <div className="mainPic">
                <img src={Main} alt="Logo" />
            </div>
        </header>
    )
}

export default Header