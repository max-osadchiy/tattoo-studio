import React from 'react'

import './ReviewsContainer'
import avatar_1 from '../../../img/Anna.svg'
import avatar_2 from '../../../img/Alex.svg'
import avatar_3 from '../../../img/Mark.svg'

const ReviewsContainer = () => {
    const s = [
        {
            'img': avatar_1,
            'name': 'Anna',
            'discription_1': 'Made a very cool tattoo, and most',
            'discription_2': 'importantly quickly, I recommend this',
            'discription_3': 'studio!',
        },
        {
            'img': avatar_2,
            'name': 'Alexander',
            'discription_1': 'I liked the service, experienced tattoo',
            'discription_2': 'masters and the quality of work. Will be back',
            'discription_3': 'here again.',
        },
        {
            'img': avatar_3,
            'name': 'Mark',
            'discription_1': 'I really liked the work of the master,',
            'discription_2': 'explained everything and said how to care',
            'discription_3': 'for the tattoo. I am forever your client!',
        },
    ]

    return s.map(event => (
        <div className="person-block">
            <img src={event.img} alt=""/>
            <h2 style={{ marginTop: '5%' }}>{event.name}</h2>
            <p style={{ marginTop: '5%' }}>
                {event.discription_1}<br/>
                {event.discription_2}<br/>
                {event.discription_3}
            </p>
        </div>
    ))
}

export default ReviewsContainer