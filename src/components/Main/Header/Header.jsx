import React from 'react'

import './Header.scss'
import lineLong from '../../../img/LineLong.svg'
import lineShort from '../../../img/LineShort.svg'
import logo from '../../../img/Logo.svg'

const Header = () => {
    return (
        <div className="Header wrapper-abs">
            <div className="menu">
                <img style={{ marginBottom: '10px' }} src={lineLong} alt="lineLong"/>
                <img src={lineShort} alt="lineShort"/>
            </div>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="phone-num">
                <h3>+38 (098) 414 12 00</h3>
            </div>
        </div>
    )
}

export default Header