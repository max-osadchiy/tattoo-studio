import React from 'react'
import Header from '../../components/Header/Header'

import './AboutPage.scss'
import FirstBlock from '../../components/About/FirstBlock/FirstBlock'
import SecondBlock from '../../components/About/SecondBlock/SecondBlock'

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <FirstBlock />
      <SecondBlock />
    </div>
  )
}

export default AboutPage
