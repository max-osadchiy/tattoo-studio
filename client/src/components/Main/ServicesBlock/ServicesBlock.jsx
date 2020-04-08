import React from 'react'

import './ServicesBlock.scss'
import imgTwo from '../../../img/imgTwo.svg'
import imgThree from '../../../img/imgThree.svg'
import imgFour from '../../../img/imgFour.svg'
import imgFive from '../../../img/imgFive.svg'
import arrow from '../../../img/arrow.svg'
 
const ServicesBlock = () => {
    const s = [ 
        {       
            'name': 'Tattoo',
            'img': imgTwo,
            'discription_1': 'A tattoo is a form of body modification where a design',
            'discription_2': 'is made by inserting ink, dyes and pigments, either',
            'discription_3': 'indelible or temporary, into the dermis layer...',
        },
        {
            'name': 'Piercing',
            'img': imgThree,
            'discription_1': 'Body piercing, a form of body modification, is the',
            'discription_2': 'practice of puncturing or cutting a part of the human',
            'discription_3': 'body, creating an opening in...',
        }, 
        {
            'name': 'Tattoo removal',
            'img': imgFour,
            'discription_1': 'Tattoo removal has been performed with various tools',
            'discription_2': 'since the start of tattooing. While tattoos were once',
            'discription_3': 'considered permanent it is now...',
        },
        {
            'name': 'Permanent makeup',
            'img': imgFive,
            'discription_1': 'Permanent makeup is a cosmetic technique which',
            'discription_2': 'employs tattoos as a means of producing designs that',
            'discription_3': 'resemble makeup, such as eyelining...',
        }, 

    ]

    return s.map(event => (
        <div className="tattoo-block">
            <div className="tattoo-img">
                <img src={event.img} alt=""/>
            </div>
            <div className="tattoo-text">
                <h2>{event.name}</h2>
                <p style={{ marginTop: '5%' }}>
                    {event.discription_1}<br/>
                    {event.discription_2}<br/>
                    {event.discription_3}
                </p>
                <h4 style={{ color: '#E97477', float: 'right', marginTop: '8%' }}>next <img style={{ marginLeft: '12px'  }} src={arrow} alt=""/></h4>
            </div>
        </div>
    ))
}

export default ServicesBlock