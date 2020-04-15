import React from 'react'

import './FirstBlock.scss'
import about_img from '../../../img/about-img.svg'
import TextContainer from './TextContainer/TextContainer'

const FirstBlock = () => {
    return (
        <div className="a-first-block">
            <TextContainer />
            <div className="a-img-container"><img src={about_img} alt=""/></div>
      </div>
    )
}

export default FirstBlock