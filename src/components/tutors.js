import React from 'react';
import { FiBriefcase, FiMail } from 'react-icons/fi';

import miika from '../static/miika.jpeg';
import emilia from '../static/emilia.jpeg';
import sini from '../static/sini.jpeg';
import konsta from '../static/konsta.jpeg';

const koneTutors = [[{
  image: miika,
  name: 'Miika Peltotalo',
  bio: '6. vuoden tietotekniikan opiskelija',
  mail: 'mvjpel[ät]utu.fi'
}, {
  image: miika,
  name: 'Silja-Sofia Palojoki',
  bio: '2. vuoden biotekniikan opiskelija',
  mail: '?? '
}], [{
  image: emilia,
  name: 'Emilia Kalliokoski',
  bio: '5. vuoden tilastotieteen opiskelija',
  mail: 'emamka[ät]utu.fi'
}, {
  image: emilia,
  name: 'Kalle Hautamäki',
  bio: '4. vuoden tietotekniikan opiskelija',
  mail: 'emamka[ät]utu.fi'
}], [{
  image: sini,
  name: 'Sini Toivola',
  bio: '5. vuoden fysiikan opiskelija',
  mail: 'situto[ät]utu.fi',
}, {
  image: konsta,
  name: 'Konsta Purtsi',
  bio: '5. vuoden tietotekniikan opiskelija',
  mail: 'kovipu[ät]utu.fi'
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
        <img src={tutor1.image} className="Tutor-img1" />
      </div>
      <div className="Tutor">
        <img src={tutor2.image} className="Tutor-img2" />
        {renderTutorInfo(tutor2)}
      </div>
    </div>
  );
}

export default Tutors;