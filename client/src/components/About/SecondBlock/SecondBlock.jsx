import React from 'react'

import './SecondBlock.scss'
import ArtistsContainer from './ArtistsContainer/ArtistsContainer'

const SecondBlock = () => {
    return (
        <div className="second-block">
            <div className="second-title">
                <h1>Tattoo Artists</h1>
            </div>
            <span className="high-number a-high-number-two">2</span>
            <div className="artists-container">
                <ArtistsContainer />
            </div>
        </div>
    )
}

export default SecondBlock