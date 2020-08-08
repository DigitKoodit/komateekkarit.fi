import React from 'react';

import Timetable from './timetable';

const happenings = [
  {
    title: 'Lauantai 22.8.',
    events: [{
      name: 'Varaslähtö',
      place: 'Q-talo, Nummenpuistokatu 2',
      time: 'Kello 14:30 ->',
      offset: 22,
      height: 34
    }]
  }, {
    title: 'Maanantai 24.8.',
    events: [{
      name: 'Laitoksen tapaaminen ja fuksiryhmiin jako',
      place: 'Agora XXI (kone), Agora XX (materiaali)',
      time: 'Kello 9:00 - 11:00',
      height: 8
    }, {
      name: 'Lounas',
      time: 'Kello 11:00 - 12:30',
      height: 6,
    }, {
      name: 'Tiedekunnan luentoja',
      time: 'Kello 12:30 - 15:15',
      height: 11
    }, {
      name: 'Rentoa hengailua tuutoreiden johdolla',
      place: 'Kiltahuone',
      time: 'Kello 15:15 - 20:00',
      height: 19
    }]
  }, {
    title: 'Tiistai 25.8.',
    events: [{
      name: 'Yliopiston sähköisiin järjestelmiin tutustuminen',
      time: 'Kello 9:00 - 11:00',
      height: 8
    }, {
      name: 'Lounas',
      time: 'Kello 11:00 - 12:15',
      height: 5
    }, {
      name: 'YTHS, CampusSport, Hybridi, TYY esittäytyvät',
      time: 'Kello 12:15 - 14:30',
      height: 9
    }, {
      name: 'Fuksikyykkä',
      time: 'Kello 17:00 - 20:00',
      place: 'Kuuvuoren hiekkakenttä',
      offset: 10,
      height: 12
    }, {
      name: 'Baarikierros',
      time: 'Kello 18:00 ->',
      place: 'Hämeenkadun ja keskustan baarit',
      height: 12
    }]
  }, {
    title: 'Keskiviikko 26.8.',
    events: [{
      name: 'Henkilökuntaan tutustuminen, materiaalitekniikka',
      time: 'Kello 12:00 - 14:00',
      place: 'Teutorin aulatila',
      offset: 12,
      height: 8
    }, {
      name: 'Rentoa kiltishengailua ja killan perustamispöhinää',
      time: 'Kello 16:00 - 20:00',
      place: 'Kiltahuone',
      offset: 8,
      height: 16
    }]
  }, {
    title: 'Torstai 27.8.',
    events: [{
      name: 'Henkilökuntaan tutustuminen, konetekniikka',
      time: 'Kello 10:00 - 12:00',
      place: 'Teutorin aulatila',
      offset: 4,
      height: 8
    }, {
      name: 'DI-opiskelijainfo, (DI-vaiheen opiskelijoille)',
      place: 'Agora 110A/B',
      time: 'Kello 15:00 - 17:00',
      offset: 12,
      height: 8
    }, {
      name: 'Teekkarifuksien rastikierros',
      place: 'Kampusalue ja keskusta',
      time: 'Kello 17:00 - 22:00',
      height: 16
    }, {
      name: 'Fuksi- ja pilttibileet',
      time: 'Kello 21:00 ->',
      place: 'Night Club Vegas',
      height: 12
    }]
  }, {
    title: 'Perjantai 28.8.',
    events: [{
      name: 'Teekkarifuksien piknik',
      place: 'Teletappimäki, Arcanumin takapiha',
      time: 'Kello 13:00 - 18:00',
      offset: 16,
      height: 20
    }]
  }
];

const Happenings = () => (
  <div className="Happenings">
    <h1>Orientaatioviikko</h1>
    <div className="Happenings_mobile">
      {happenings.map(day => (
        <div className="Day">
          <h2>{day.title}</h2>
          {day.events.map(e => (
            <div className="Event">
              {e.time}
              <h3>{e.name}</h3>
              {e.place}
            </div>
          ))}
        </div>
      ))}
    </div>
    <Timetable happenings={happenings} />
  </div>
);

export default Happenings;