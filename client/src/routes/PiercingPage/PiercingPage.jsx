import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './PiercingPage.scss'
import piercing_one_img from '../../img/piercing-one.svg'
import piercing_two_img from '../../img/piercing-two.svg'
import arrow_left from '../../img/arrow-l.svg'
import line_tattoo from '../../img/line-tattoo.svg'


const PiercingPage = () => {
    return (
        <div className="piercing-page">
            <div className="piercing-header">
                <Header />
            </div>
            <div className="piercing-container">
                <div>
                    <img src={piercing_one_img} alt=""/>
                </div>
                <div className="piercing-text">
                    <h4><img src={arrow_left} alt=""/> return</h4>
                    <h1>Piercing</h1>
                    <img src={line_tattoo} alt=""/>
                    <h2>Body piercing<p>, a form of body modification, is the practice of puncturing or cutting a part of the human body, creating an opening in which jewelry may be worn, or where an implant could be inserted. </p></h2>
                    <h2>The healing time<p> is individual and depends on the sterility and correctness of the procedure, on your care and on the location of the piercing. For example, punctures on the mucosa heal faster than a nipple or a navel. With the right selection of care, as well as subject to the recommendations of the master, piercing on average heals from 2 weeks to 1 month.</p></h2>
                    <p>We strongly recommend not moving or scrolling jewelry at the stage of channel formation (i.e., until the piercing is completely healed). Also, do not rush to change the decoration, because this can provoke a repeated inflammation of the puncture. </p>
                    <p>If for some reason the puncture does not heal for a long time, be sure to contact a qualified craftsman for recommendations on eliminating the negative consequences (inflammation, redness, suppuration at the puncture site). Such issues need to be addressed as soon as possible in order to avoid complications that will have to consult a doctor.</p>
                    <button className="piercing-btn"><h4>get an appointment</h4></button>
                    <img className="piercing-img-two" src={piercing_two_img} alt=""/>
                </div>
            </div>
            <div className="piercing-footer">
                <Footer />
            </div>
        </div>
    )
}

export default PiercingPage