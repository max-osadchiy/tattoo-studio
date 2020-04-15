import React from 'react'
import Header from '../../components/Header/Header'

import './AboutPage.scss'
import FirstBlock from '../../components/About/FirstBlock/FirstBlock'
import SecondBlock from '../../components/About/SecondBlock/SecondBlock'
import ThirdBlock from '../../components/About/ThirdBlock/ThirdBlock'
import FourthBlock from '../../components/About/FourthBlock/FourthBlock'
import Footer from '../../components/Footer/Footer'

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Footer />
    </div>
  )
}

export default AboutPage
