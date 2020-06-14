import React from 'react';
import { FiBriefcase, FiMail } from 'react-icons/fi';

import miika from '../static/miika.jpeg';
import silja from '../static/silja.jpeg';
import emilia from '../static/emilia.jpeg';
import sini from '../static/sini.jpeg';
import konsta from '../static/konsta.jpeg';
import millina from '../static/millina.jpeg';
import sofia from '../static/sofia.jpeg';
import mikko from '../static/mikko.jpeg';

import kimmo from '../static/kimmo.jpeg';
import yasmine from '../static/yasmine.jpeg';
import laura from '../static/laura.jpeg';
import jami from '../static/jami.jpeg';
import niklas from '../static/niklas.jpeg';
import juhana from '../static/juhana.jpeg';
import juho from '../static/juho.jpeg';

const koneTutors = [[{
  image: miika,
  name: 'Miika Peltotalo',
  bio: '6. vuoden tietotekniikan opiskelija',
  mail: 'mvjpel[ät]utu.fi'
}, {
  image: silja,
  name: 'Silja-Sofia Palojoki',
  bio: '2. vuoden biotekniikan opiskelija',
  mail: 'sispal[ät]utu.fi'
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
}], [{
  image: millina,
  name: 'Millina Lehikoinen',
  bio: '2. vuoden tietotekniikan opiskelija',
  mail: 'milehi[ät]utu.fi'
}, {
  image: sofia,
  name: 'Sofia Pöntys',
  bio: '3. vuoden fysiikan opiskelija',
  mail: 'skpont[ät]utu.fi'
}], [{
  image: mikko,
  name: 'Mikko Jaskari',
  bio: '5. vuoden matematiikan opiskelija',
  mail: 'mimajas[ät]utu.fi'
}, {
  image: mikko,
  name: 'Rio Koskelo',
  bio: '5. vuoden tietotekniikan opiskelija',
  mail: 'rlskos[ät]utu.fi'
}]];

const materialTutors = [[{
  image: kimmo,
  name: 'Kimmo Pyyhtiä',
  bio: '5. vuoden fysiikan opiskelija ja materiaalitekniikan opiskelija',
  mail: 'kitapy[ät]utu.fi'
}, {
  image: yasmine,
  name: 'Yasmine Rantala',
  bio: '4. vuoden tietotekniikan opiskelija',
  mail: 'ycbran[ät]utu.fi'
}], [{
  image: laura,
  name: 'Laura Forsman',
  bio: '5. vuoden biotekniikan opiskelija',
  mail: 'laelfo[ät]utu.fi'
}, {
  image: laura,
  name: 'Minorka Kiljala',
  bio: '4. vuoden tietotekniikan opiskelija',
  mail: '??'
}], [{
  image: jami,
  name: 'Jami Selin',
  bio: '4. vuoden tietotekniikan opiskelija',
  mail: '??'
}, {
  image: niklas,
  name: 'Niklas Luomala',
  bio: '6. vuoden tietotekniikan opiskelija',
  mail: 'nemluo[ät]utu.fi'
}], [{
  image: juhana,
  name: 'Juhana Kuparinen',
  bio: '2. vuoden tietotekniikan opiskelija',
  mail: 'jmkupa[ät]utu.fi'
}, {
  image: juhana,
  name: 'Matias Kumpulainen',
  bio: '??',
  mail: '??'
}], [{
  image: juho,
  name: 'Juho Ollila',
  bio: '2. vuoden tietotekniikan opiskelija',
  mail: 'jtolli[ät]utu.fi'
}, {
  image: juho,
  name: 'Jutta Lindfors',
  bio: '??',
  mail: '??'
}]];


const Tutors = () => (
  <div className="Tutors">
    <h1>Konetekniikan tuutorit</h1>
    {koneTutors.map(renderPair)}

    <h1>Materiaalitekniikan tuutorit</h1>
    {materialTutors.map(renderPair)}
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