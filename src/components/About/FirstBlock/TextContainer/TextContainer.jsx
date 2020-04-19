import React from 'react'

import './TextContainer.scss'

const TextContainer = () => {
    return (
        <div className="a-text-container">
            <div className="a-text-block">
                <span className="high-number a-high-number-one">1</span>
                <h1>About Us</h1>
                <h2 className="a-h2-to-p a-first-text">Street Tattoo Studio</h2>
                <p>piercing. We are focused on a high-quality result, and therefore we have selected a team of professionals for you. Our studio uses only the best, modern equipment and supplies.</p>
                <p>We guarantee strict adherence to sterility standards. Both process and speedy healing are equally important to us. Therefore, we offer innovative skin care products.</p>
                <h2 className="a-h2-to-p a-second-text">We want</h2>
                <p>you, and we have in our arsenal a cream that removes unpleasant sensations in the area of ​​drawing. Street Tattoo - tattoo studio, which adheres to the best traditions of European quality!</p>
            </div>
        </div>
    )
}
 
export default TextContainer