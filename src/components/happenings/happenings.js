import React from 'react';

import Timetable from './timetable';

const happenings = [
  {
    title: 'Lauantai 22.8.',
    events: [{
      name: 'Varaslähtö',
      place: 'Q-talo, Nummenpuistokatu 2',
      time: 'Kello 12:30 ->',
      offset: 14,
      height: 38
    }]
  }, {
    title: 'Maanantai 24.8.',
    events: [{
      name: 'Laitoksen tapaaminen ja fuksiryhmiin jako',
      time: 'Kello 9:00 - 11:00',
      height: 8
    }, {
      name: 'Tiedekunnan luentoja',
      time: 'Kello 12:30 - 15:15',
      offset: 6,
      height: 11
    }, {
      name: 'Aikaisempien opintojen hyödyntäminen',
      time: 'Kello 15:25 - 15:45',
      offset: 1,
      height: 6
    }, {
      name: 'Tuutoreiden järjestämää iltaohjelmaa',
      time: 'Kello 15:15 - 20:00',
      height: 20
    }]
  }, {
    title: 'Tiistai 25.8.',
    events: [{
      name: 'Yliopiston sähköisiin järjestelmiin tutustuminen',
      time: 'Kello 9:00 - 11:30',
      height: 10
    }, {
      name: 'Tiedekunnan luentoja',
      time: 'Kello 12:15 - 13:15',
      offset: 3,
      height: 4
    }, {
      name: 'Hybridi ja TYY esittäytyvät',
      time: 'Kello 13:30 - 14:30',
      offset: 1,
      height: 4
    }, {
      name: 'Fuksikyykkä',
      time: 'Kello 17:00 - 20:00',
      place: 'Educariumin hiekkakenttä',
      offset: 10,
      height: 12
    }, {
      name: 'Baarikierros',
      time: 'Kello 20:00 ->',
      place: 'Lähtö Proffan Kellarista',
      height: 16
    }]
  }, {
    title: 'Keskiviikko 26.8.',
    events: [{
      name: 'Rehtorin "kättely"',
      time: 'Kello 9:45 - 10:30',
      offset: 3,
      height: 3
    }, {
      name: 'Henkilökuntaan tutustumista',
      time: 'Kello 12:00 - 15:00',
      offset: 6,
      height: 12
    }, {
      name: 'Teekkaritapaaminen?',
      time: 'Kello 15:30 - 17:00',
      offset: 2,
      height: 6
    }, {
      name: 'Yhteistä hengailua',
      time: 'Kello 18:00 - 22:00',
      offset: 4,
      height: 16
    }, {
      name: 'Pilttibileet',
      time: 'Kello 22:00 ->',
      place: 'Night Club Vegas',
      height: 8
    }]
  }, {
    title: 'Torstai 27.8.',
    events: [{
      name: 'Henkilökuntaan tutustumista',
      time: 'Kello 10:00 - 12:00',
      offset: 4,
      height: 8
    }, {
      name: 'Järjestöt esittäytyvät',
      time: 'Kello 13:00 - 15:00',
      offset: 4,
      height: 8
    }, {
      name: 'DI-opiskelijainfo',
      time: 'Kello 15:00 - 17:00',
      height: 8
    }, {
      name: 'Teekkarifuksien rastikierros',
      time: 'Kello 17:00 - 22:00',
      height: 20
    }, {
      name: 'Fuksi- ja pilttibileet',
      time: 'Kello 22:00 ->',
      place: 'Night Club Vegas',
      height: 8
    }]
  }, {
    title: 'Perjantai 28.8.',
    events: [{
      name: 'Tuutoriryhmän ohjelmaa',
      time: 'Kello 12:00 - 14:00',
      offset: 12,
      height: 8
    }, {
      name: 'Teekkarifuksien piknik',
      time: 'Kello 15:00 - 18:00',
      offset: 4,
      height: 12
    }]
  }
];

const Happenings = () => (
  <div className="Happenings">
    <h1>Orientaatioviikko</h1>
    <p>Aikataulu on alustava, ja voi vielä muuttua.</p>
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