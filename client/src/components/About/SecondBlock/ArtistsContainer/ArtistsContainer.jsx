import React from 'react'
import { Link } from 'react-router-dom'

import './ArtistsContainer.scss'
import s_line_about from '../../../../img/s-line-about.svg'
import avatar_1 from '../../../../img/About/Andrey-cropped.png'
import avatar_2 from '../../../../img/Oleg.svg'
import avatar_3 from '../../../../img/Nastya.svg'
import avatar_4 from '../../../../img/Maria.svg'

const ArtistsContainer = () => {
    const s = [
        {
            img: avatar_1,
            name: 'Andrey Shtanko',
            discription: 'Graphics, ornamental, graves',
            link: '/about/andrey'
        },
        {
            img: avatar_2,
            name: 'Oleg Zhurenko',
            discription: 'Graphics, dotwork, tattoo removal',
            link: '/about/oleg'
        },
        {
            img: avatar_3,
            name: 'Anastasia Limp',
            discription: 'Piercing, realism, graphics',
            link: '/about/anastasia'
        },
        {
            img: avatar_4,
            name: 'Maria Gobriy',
            discription: 'Watercolor, permanent makeup',
            link: '/about/maria'
        },
    ]

    return s.map(event => (
        <div>
            <img width="321px" height="321px" src={event.img} alt=""/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>{event.name}</h2>
                <p>{event.discription}</p>
                <img src={s_line_about} alt=""/>
                <Link to={event.link}>Look more</Link>
            </div>
        </div>
    ))
}

export default ArtistsContainer