import React from 'react';

import './SkillContainer.scss';

const SkillContainer = () => {
  const s = [
    {
      num: '1',
      name: 'Experience',
      discription_1: 'For more than 5 years',
      discription_2: 'we have made your',
      discription_3: 'wildest dreams come true',
    },
    {
      num: '2',
      name: 'Quality',
      discription_1: 'We use the best supplies',
      discription_2: 'equipment and disposable',
      discription_3: 'supplies',
    },
    {
      num: '3',
      name: 'Service',
      discription_1: 'Individually approach your',
      discription_2: 'idea and develop an',
      discription_3: 'exclusive sketch',
    },
    {
      num: '4',
      name: 'Sterility',
      discription_1: 'We guarantee strict',
      discription_2: 'compliance with safety',
      discription_3: 'and sterility standards',
    },
  ];

  return s.map((event, id) => (
    <div key={id} className="skill-container">
      <div className="skill-one">
        <div>
          <p className="skill-num">{event.num}</p>
        </div>
        <div className="skill-text">
          <h2>{event.name}</h2>
          <p>
            {event.discription_1}
            <br />
            {event.discription_2}
            <br />
            {event.discription_3}
          </p>
        </div>
      </div>
    </div>
  ));
};

export default SkillContainer;
