import React from 'react';

import Timetable from './timetable';
import MobileHappenings from './mobileHappenings';

const kone = 'kone';
const materiaali = 'materiaali';

const happenings = [
  {
    title: 'Lauantai 22.8.',
    events: [{
      name: 'Varaslähtö',
      place: 'Q-talo, Nummenpuistokatu 2',
      time: '14:30 ->',
      offset: 22,
      height: 34
    }]
  }, {
    title: 'Maanantai 24.8.',
    events: [{
      name: 'Laitoksen tapaaminen ja fuksiryhmiin jako',
      place: 'Agora XXI',
      time: '9:00 - 11:00',
      height: 8,
      exclusiveTo: kone,
      secondary: {
        name: 'Laitoksen tapaaminen ja fuksiryhmiin jako',
        place: 'Agora XX',
        time: '9:00 - 11:00',
        exclusiveTo: materiaali,
      }
    }, {
      name: 'Lounas',
      time: '11:00 - 12:30',
      height: 6,
    }, {
      name: 'Tiedekunnan luentoja',
      time: '12:30 - 15:00',
      height: 10
    }, {
      name: 'Rentoa hengailua tuutoreiden johdolla',
      time: '15:00 - 20:00',
      height: 20
    }]
  }, {
    title: 'Tiistai 25.8.',
    events: [{
      name: 'Yliopiston sähköisiin järjestelmiin tutustuminen',
      time: '9:00 - 11:00',
      height: 8,
      place: 'Agora K126A/B/C'
    }, {
      name: 'Lounas',
      time: '11:00 - 12:15',
      height: 5
    }, {
      name: 'YTHS, CampusSport, Hybridi & TYY esittäytyvät',
      time: '12:15 - 14:30',
      height: 9
    }, {
      name: 'Fuksikyykkä',
      time: '17:00 - 20:00',
      place: 'Kuuvuoren hiekkakenttä',
      offset: 10,
      height: 12
    }, {
      name: 'Puistokierros',
      time: '18:00 ->',
      place: 'Kuuvuoren hiekkakenttä',
      height: 16,
      secondary: {
        name: 'Vaihtoehtoinen ohjelma',
        time: '20:00 ->',
        place: 'Digitin kiltahuone'
      }
    }]
  }, {
    title: 'Keskiviikko 26.8.',
    events: [{
      name: 'Henkilökuntaan tutustuminen',
      time: '12:00 - 14:00',
      place: 'Teutorin aulatila',
      exclusiveTo: materiaali,
      offset: 12,
      height: 8,
      secondary: {
        name: 'TEK & TK esittäytyvät',
        time: '13:00 - 14:00',
        exclusiveTo: kone,
        offset: 4,
      }
    }, {
      name: 'TEK & TK esittäytyvät',
      time: '14:00 - 15:00',
      exclusiveTo: materiaali,
      height: 4,
    }, {
      name: 'Rentoa hengailua ja killan perustamispöhinää',
      time: '16:00 - 20:00',
      offset: 4,
      height: 16
    }]
  }, {
    title: 'Torstai 27.8.',
    events: [{
      name: 'Henkilökuntaan tutustuminen',
      time: '10:00 - 12:00',
      place: 'Teutorin aulatila',
      offset: 4,
      height: 8,
      exclusiveTo: kone
    }, {
      name: 'DI-opiskelijainfo, (DI-vaiheen opiskelijoille)',
      place: 'Agora 110A/B',
      time: '15:00 - 17:00',
      offset: 12,
      height: 8
    }, {
      name: 'Teekkarifuksien rastikierros',
      place: 'Kampusalue ja keskusta',
      time: '17:00 - 22:00',
      height: 20
    }]
  }, {
    title: 'Perjantai 28.8.',
    events: [{
      name: 'Teekkarifuksien piknik',
      place: 'Teletappimäki, Arcanumin takapiha',
      time: '13:00 - 18:00',
      offset: 16,
      height: 20
    }]
  }
];

const Happenings = () => (
  <div className="Happenings">
    <h1>Orientaatioviikko</h1>
    <p className="Happenings-colorcode">
      <h2>Värikoodaus</h2>
      <p>
        <span className="color-both">▇</span> Kone- ja materiaalitekniikka
      </p>
      <p>
        <span className="color-kone">▇</span> Konetekniikka
      </p>
      <p>
        <span className="color-materiaali">▇</span> Materiaalitekniikka
      </p>
    </p>
    <MobileHappenings happenings={happenings} />
    <Timetable happenings={happenings} />
    <p style={{ textAlign: 'right' }}>Tuutorisi järjestävät ohjelmaa myös virallisen aikataulun ulkopuolella.</p>
  </div>
);

export default Happenings;