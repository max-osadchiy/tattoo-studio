import React, { createContext, useState } from 'react';
import Andrey from '../img/About/Andrey-cropped.png';
import Oleg from '../img/About/Oleg-cropped.png';
import Maria from '../img/About/Maria-cropped.png';
import Nastya from '../img/About/Nastya-cropped.png';

export const ArtistsContext = createContext();

export const ArtistsProvider = ({ children }) => {
  const artists = useState([
    {
      id: 1,
      name: 'Andrey Shtanko',
      sphere: 'Graphics, ornamental, graves',
      photo: Andrey,
    },
    {
      id: 2,
      name: 'Oleg Zhurenko',
      sphere: 'Graphics, dotwork, tattoo removal',
      photo: Oleg,
    },
    {
      id: 3,
      name: 'Anastasia Limp',
      sphere: 'Piercing, realism, graphics',
      photo: Nastya,
    },
    {
      id: 4,
      name: 'Maria Gobriy',
      sphere: 'Watercolor, permanent makeup',
      photo: Maria,
    },
  ]);

  return (
    <ArtistsContext.Provider value={{ artists }}>
      {children}
    </ArtistsContext.Provider>
  );
};
