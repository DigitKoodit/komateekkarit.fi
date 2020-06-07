import React from 'react';
import { FiBriefcase, FiPhone, FiMail } from 'react-icons/fi';

import sini from '../static/sini.jpeg';
import konsta from '../static/konsta.jpeg';

const koneTutors = [[{
  image: sini,
  name: 'Sini Toivola',
  bio: '5. vuoden fysiikan opiskelija',
  mail: 'situto@utu.fi',
}, {
  image: konsta,
  name: 'Konsta Purtsi',
  bio: '5. vuoden tietotekniikan opiskelija',
  mail: 'kovipu@utu.fi'
}]];


const Tutors = () => (
  <div className="Tutors">
    <h1>Konetekniikan tuutorit</h1>
    {koneTutors.map(renderPair)}

    <h1>Materiaalitekniikan tuutorit</h1>
  </div>
);

const renderPair = pair => {
  const [tutor1, tutor2] = pair;

  const renderTutorInfo = ({ name, bio, phone, mail }) => (
    <div className="Tutor-info">
      <h1>{name}</h1>
      <p>
        <FiBriefcase />{' '}{bio}
      </p>
      <p>
        <FiMail />{' '}{mail}
      </p>
    </div>
  )
  
  return (
    <div className="TutorPair">
      <div className="Tutor">
        {renderTutorInfo(tutor1)}
        <img src={tutor1.image} />
      </div>
      <div className="Tutor">
        <img src={tutor2.image} />
        {renderTutorInfo(tutor2)}
      </div>
    </div>
  );
}

export default Tutors;