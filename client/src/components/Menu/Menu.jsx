import React from 'react'

import './Menu.scss'
import cross from '../../img/cross.svg'
import line from '../../img/LineMenu.svg'

const Menu = () => {

    // const show_service = (id) => {
    //     if ("show_service") document.getElementById("show_service").className = 'dis-n'
    //     document.getElementById("show_service").className = 'dis-b'
    //     return id
    // }

    // const show_artist = () => {

    // }

    return (
        <div className="menu-component">
            <img src={cross} alt=""/>
            <div className="menu-container">
                <div>
                    <h1> Home</h1>
                    <h1>About Us</h1>
                    <h1>Services</h1>
                    <span>
                        <ul className="dis-n">
                            <li><h2>Tattoo</h2></li>
                            <li><h2>Piercing</h2></li>
                            <li><h2>Tatto removal</h2></li>
                            <li><h2>Permanent makeup</h2></li>
                        </ul>
                    </span>
                    <h1>Tattoo Artists</h1>
                    <span>
                            <ul className="dis-n">
                                <li><h2>Tattoo</h2></li>
                                <li><h2>Piercing</h2></li>
                                <li><h2>Tatto removal</h2></li>
                                <li><h2>Permanent makeup</h2></li>
                            </ul>
                        </span>
                    <h1>FAQ</h1>
                </div>
                <div>
                    <h3>Street Tattoo Studio <br/> 16A Grecheskaya street, Odessa, Ukraine</h3>
                    <h3>+38(096)454 36 40</h3>
                    <h3>strtattoo@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default Menu