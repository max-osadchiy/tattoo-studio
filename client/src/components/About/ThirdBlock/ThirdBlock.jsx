import React from 'react'

import './ThirdBlock.scss'

const ThirdBlock = () => {
    return (
        <div className="third-block">
            <span className="high-number a-high-number-three">3</span>
            <h1>Price</h1>
            <h2>Thanks to the “Upload Tattoo” button, you can find out the price of the tattoo you are loading</h2>
            <h3>1. Select a tattoo you want to know the cost of</h3>
            <h3>2. Upload image</h3>
            <h3>3. Expect results</h3>
            <p>Many factors influence the price of a tattoo, and the most important point is the choice of a master. If the master is qualified and experienced, respectively, his work will cost more.
            Because good quality and the workmanship of an experienced professional cannot be evaluated cheaply. The work of novice craftsmen, at a price much lower than that of experienced professionals. The main criteria by which a specialist evaluates a tattoo is the scale of the image, the difficulty in execution and the quality of work.</p>
            <button><h4>Upload tattoo +</h4></button>
        </div>
    )
}

export default ThirdBlock