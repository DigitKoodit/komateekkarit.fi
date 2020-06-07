import React from 'react';

const happenings = [
  {
    title: 'Lauantai 22.8.',
    events: [{
      name: 'Varaslähtö',
      place: 'Q-talo, Nummenpuistokatu 2',
      time: 'Kello 12:30 ->'
    }]
  }, {
    title: 'Maanantai 24.8.',
    events: [{
      name: 'Laitoksen tapaaminen ja fuksiryhmiin jako',
      time: 'Kello 9:00 - 11:00'
    }, {
      name: 'Tiedekunnan luentoja',
      time: 'Kello 12:30 - 15:15'
    }, {
      name: 'Aikaisempien opintojen hyödyntäminen',
      time: 'Kello 15:25 - 15:45'
    }, {
      name: 'Tuutoreiden järjestämää iltaohjelmaa',
      time: 'Kello 15:15 - 20:00'
    }]
  }, {
    title: 'Tiistai 25.8.',
    events: [{
      name: 'Yliopiston sähköisiin järjestelmiin tutustuminen tuutorien johdolla',
      time: 'Kello 9:00 - 11:30'
    }, {
      name: 'Tiedekunnan luentoja',
      time: 'Kello 12:15 - 13:15'
    }, {
      name: 'Hybridi ja TYY esittäytyvät',
      time: 'Kello 13:30 - 14:30'
    }, {
      name: 'Fuksikyykkä',
      time: 'Kello 17:00 - 20:00',
      place: 'Educariumin hiekkakenttä'
    }, {
      name: 'Baarikierros',
      time: 'Kello 20:00 ->',
      place: 'Lähtö Proffan Kellarista'
    }]
  }, {
    title: 'Keskiviikko 26.8.',
    events: [{
      name: 'Rehtorin "kättely"',
      time: 'Kello 9:45 - 10:30'
    }, {
      name: 'Henkilökuntaan tutustumista',
      time: 'Kello 12:00 - 15:00'
    }, {
      name: 'Teekkaritapaaminen?',
      time: 'Kello 15:30 - 17:00'
    }, {
      name: 'Yhteistä hengailua',
      time: 'Kello 18:00 - 22:00'
    }, {
      name: 'Pilttibileet / Delta & Synapsi',
      time: 'Kello 22:00 ->',
      place: 'Night Club Vegas'
    }]
  }, {
    title: 'Torstai 27.8.',
    events: [{
      name: 'Henkilökuntaan tutustumista',
      time: 'Kello 10:00 - 12:00'
    }, {
      name: 'Järjestöt esittäytyvät',
      time: 'Kello 13:00 - 15:00'
    }, {
      name: 'DI-opiskelijainfo',
      time: 'Kello 15:00 - 17:00'
    }, {
      name: 'Teekkarifuksien rastikierros',
      time: 'Kello 17:00 - 22:00'
    }, {
      name: 'Fuksi- ja pilttibileet / Digit, Nucleus & TYK ry',
      time: 'Kello 22:00 ->'
    }]
  }, {
    title: 'Perjantai 28.8.',
    events: [{
      name: 'Tuutoriryhmän ohjelmaa',
      time: 'Kello 12:00 - 14:00'
    }, {
      name: 'Teekkarifuksien piknik',
      time: 'Kello 15:00 - 18:00'
    }]
  }
];

const Happenings = () => (
  <div className="Happenings">
    <h1>Orientaatioviikko</h1>
    <p>Aikataulu on alustava, ja voi vielä muuttua.</p>
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
);

export default Happenings;