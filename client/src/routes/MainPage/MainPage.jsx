import React from 'react'
import Header from '../../components/Main/Header/Header'
import TextContainer from '../../components/Main/TextContainer/TextContainer'
import Contacts from '../../components/Main/Contacts/Contacts'
import ServicesBlock from '../../components/Main/ServicesBlock/ServicesBlock'
import SkillContainer from '../../components/Main/SkillContainer/SkillContainer'
import ReviewsContainer from '../../components/Main/ReviewsContainer/ReviewsContainer'

import imgOne from '../../img/Main/1img.jpg'
import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'
import './MainPage.scss'


const MainPage = () => {
    return (
        <div>
            <div className="first-block">
                <Header />
                <figure>
                    <img className="img-one" src={imgOne} alt="img"/>
                </figure>
                <span className='high-number high-number-one'>1</span>
                <TextContainer />
                <Contacts />
            </div>
            <div className="second-block">
                <h1>Services</h1>
                <span className='high-number high-number-two'>2</span>
                <ServicesBlock />
            </div>
            <div className="third-block">
                <h1>Our  Advantages</h1>
                <span className='high-number high-number-three'>3</span>
                <div className="skill-block">
                    <SkillContainer />
                </div>
            </div>
            <div className="fourth-block">
                <h1>We are waiting <br/> for you</h1>
                <h2>Leave a request and we will call you back right now</h2>
                <button className="fourth-btn"><h4 style={{ color: '#FAFAFA' }}>Get an appointment</h4></button>
            </div>
            <div className="fifth-block">
                <h1>Reviews</h1>
                <span className='high-number high-number-four'>4</span>
                <div className="reviews-container">
                    <div><img src={arrowLeft} alt=""/></div>
                    <ReviewsContainer/>
                    <div><img src={arrowRight} alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default MainPage