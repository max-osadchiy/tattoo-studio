import React from 'react'
import Header from '../../components/Main/Header/Header'
import TextContainer from '../../components/Main/TextContainer/TextContainer'
import Contacts from '../../components/Main/Contacts/Contacts'

import imgOne from '../../img/Main/1img.jpg'
import './MainPage.scss'


const MainPage = () => {
    return (
        <div>
            <Header />
            <figure>
                <img className="img-one" src={imgOne} alt="img"/>
            </figure>
            <span className='high-number'>1</span>
            <TextContainer />
            <Contacts />
        </div>
    )
}

export default MainPage