import React from 'react'

import './FourthBlock.scss'
import arrDown from '../../../img/arr-down.svg';
// import arrUp from '../../img/arr-up.svg';

const FourthBlock = () => {
    return (
        <div className="a-fourth-block">
            <span className="high-number a-high-number-four">4</span>
            <h1>FAQ</h1>
            <div className="faq-container">
                <div className="q-container">
                    <div className="q-title">
                        <h2>Does it hurt to have a tattoo?</h2>
                        <img src={arrDown} alt=""/>
                    </div>
                    <span>
                        <p>
                            Rather yes than no. But it also depends on many factors. Your pain threshold. Our arsenal has an innovative ointment that can cause 
                            pain to a minimum.
                        </p>
                    </span>
                </div>
                <div className="q-container">
                    <div className="q-title">
                        <h2>How to prepare for the session?</h2>
                        <img src={arrDown} alt=""/>
                    </div>
                    <span>
                        <p>
                            You should come to the session sober, rested, well-fed and in a good mood.
                            It is not recommended to drink alcohol 2-3 days before the session, as 
                            this can affect not only the process of applying the tattoo, but also adversely affect 
                            the quality of healing.
                        </p>
                    </span>
                </div>
                <div className="q-container">
                    <div className="q-title">
                        <h2>What place to choose for a tattoo?</h2>
                        <img src={arrDown} alt=""/>
                    </div>
                    <span>
                        <p>
                            The choice of location is quite extensive, because, depending on the size, the tattoo can
                            fit anywhere on the body. We do not recommend tattooing on thin areas of the skin, such as: 
                            fingers, palms, wrists, elbows, feet. In such parts of the body, the skin is often renewed 
                            and your tattoo will require frequent correction.
                        </p>
                    </span>
                </div>
                <div className="q-container">
                    <div className="q-title">
                        <h2>How safe is it?</h2>
                        <img src={arrDown} alt=""/>
                    </div>
                    <span>
                        <p>
                            The healing process of the tattoo lasts about 2 weeks. The healing speed and 
                            brightness of the pattern are largely dependent on proper care. Immediately after the session, the master will apply a healing agent and absorbent film to your tattoo. You can remove such a compress after a few hours.
                        </p> 
                    </span>
                </div>
                <div className="q-container">
                    <div className="q-title">
                        <h2>How many sessions to remove a tattoo?</h2>
                        <img src={arrDown} alt=""/>
                    </div>
                    <span>
                        <p>
                            The number of sessions varies from 2 to 10 and depends on the quality of the paint, the state of the tattoo and your goal (lighten the tattoo to cover / completely get rid of). It is recommended to repeat the procedure no more than 1 time in 5 weeks for the best recovery of the skin.
                        </p>
                    </span>
                </div>
            </div> 
        </div>
    )
}

export default FourthBlock