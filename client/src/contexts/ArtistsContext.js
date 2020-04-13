import React, { createContext, useState } from 'react';
import AndreyCropped from '../img/About/Andrey-cropped.png';
import Andrey from '../img/About/Andrey.jpg';
import OlegCropped from '../img/About/Oleg-cropped.png';
import Oleg from '../img/About/Oleg.jpg';
import MariaCropped from '../img/About/Maria-cropped.png';
import Maria from '../img/About/Maria.jpg';
import NastyaCropped from '../img/About/Nastya-cropped.png';
import Nastya from '../img/About/Nastya.jpg';

import andr1 from '../img/Tattoo artist/Andrey/Andrey1.jpg';
import andr2 from '../img/Tattoo artist/Andrey/Andrey2.jpg';
import andr3 from '../img/Tattoo artist/Andrey/Andrey3.jpg';
import andr4 from '../img/Tattoo artist/Andrey/Andrey4.jpg';
import andr5 from '../img/Tattoo artist/Andrey/Andrey5.jpg';
import andr6 from '../img/Tattoo artist/Andrey/Andrey6.jpg';

import anas1 from '../img/Tattoo artist/Anastasia/Nastya1.jpg';
import anas2 from '../img/Tattoo artist/Anastasia/Nastya2.jpg';
import anas3 from '../img/Tattoo artist/Anastasia/Nastya3.jpg';
import anas4 from '../img/Tattoo artist/Anastasia/Nastya4.jpg';
import anas5 from '../img/Tattoo artist/Anastasia/Nastya5.jpg';
import anas6 from '../img/Tattoo artist/Anastasia/Nastya6.jpg';
import anas7 from '../img/Tattoo artist/Anastasia/Nastya7.jpg';

import maria1 from '../img/Tattoo artist/Maria/Maria1.jpg';
import maria2 from '../img/Tattoo artist/Maria/Maria2.jpg';
import maria3 from '../img/Tattoo artist/Maria/Maria3.jpg';
import maria4 from '../img/Tattoo artist/Maria/Maria4.jpg';
import maria5 from '../img/Tattoo artist/Maria/Maria5.jpg';
import maria6 from '../img/Tattoo artist/Maria/Maria6.jpg';

import oleg1 from '../img/Tattoo artist/Oleg/Oleg1.jpg';
import oleg2 from '../img/Tattoo artist/Oleg/Oleg2.jpg';
import oleg3 from '../img/Tattoo artist/Oleg/Oleg3.jpg';
import oleg4 from '../img/Tattoo artist/Oleg/Oleg4.jpg';
import oleg5 from '../img/Tattoo artist/Oleg/Oleg5.jpg';
import oleg6 from '../img/Tattoo artist/Oleg/Oleg6.jpg';
import oleg7 from '../img/Tattoo artist/Oleg/Oleg7.jpg';
import oleg8 from '../img/Tattoo artist/Oleg/Oleg7.jpg';

export const ArtistsContext = createContext();

export const ArtistsProvider = ({ children }) => {
  const artists = useState([
    {
      id: 1,
      name: 'Andrey Shtanko',
      skills: 'Graphics, ornamental, graves',
      photo: Andrey,
      photoCropped: AndreyCropped,
      works: [andr1, andr2, andr3, andr4, andr5, andr6],
      quotes: [
        'I prefer graphic works on various subjects - from\n animals and ornaments to ships and castles.',
        'I have been working as a tattoo artist since 2012, I\n individually approach each project.',
        'I am inspired by nature, architecture, music and the world around us.',
      ],
    },
    {
      id: 2,
      name: 'Oleg Zhurenko',
      skills: 'Graphics, dotwork, tattoo removal',
      photo: Oleg,
      photoCropped: OlegCropped,
      works: [oleg1, oleg2, oleg3, oleg4, oleg5, oleg6, oleg7, oleg8],
      quotes: [
        'I have been tattooing since 2014.',
        'I do work in such techniques as finishing, bw graphics, dotwork.',
        'It is interesting to embody ideas in which there are floral, animalistic, ornamental-geometric and Japanese motifs.',
        'Always open to innovative and experimental ideas, and I will gladly make you painful and beautiful.',
      ],
    },
    {
      id: 3,
      name: 'Anastasia Limp',
      skills: 'Piercing, realism, graphics',
      photo: Nastya,
      photoCropped: NastyaCropped,
      works: [anas1, anas2, anas3, anas6, anas7, anas4, anas5],
      quotes: [
        'Always looking for extravagant ways to implement your ideas.',
        'In my works, the idea of ​​oxymoron is always present. In my projects, color parts and black and white colors are combined. A play of shadows and lights, this best describes my style - realism.',
      ],
    },
    {
      id: 4,
      name: 'Maria Gobriy',
      skills: 'Watercolor, permanent makeup',
      photo: Maria,
      photoCropped: MariaCropped,
      works: [maria1, maria2, maria3, maria4, maria5, maria6],
      quotes: [
        'I am often called Mavka, I think this is due to the motives of my work.',
        'Most often I create floristic / animalistic compositions in unusual color schemes.',
        'These are not the only areas that interest me.',
        'Most often I work on natural references.',
      ],
    },
  ]);

  return (
    <ArtistsContext.Provider value={{ artists }}>
      {children}
    </ArtistsContext.Provider>
  );
};
