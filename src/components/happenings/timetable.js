import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import bgColor from './bgColor';

const timeStamps = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

const QUARTHER_HOUR_IN_PIXELS = 15;

const Timetable = ({ happenings })  => {
  
  return (
    <div className="Happenings_desktop">
      <div className="Timetable-timestampContainer">
        {timeStamps.map((time, idx) => (
          <div className="Timetable-timestamp">
            <div className="Timetable-ruler" />
            <p key={idx}>
              {time}
            </p>
          </div> 
        ))}
      </div>
      <div className="Timetable-daysContainer">
      {happenings.map((day, dayIdx) => (
        <div className={`Timetable-day Timetable-day__${dayIdx}`}>
          <h1>{day.title}</h1>
          {day.events.map(ev => (
            <div
              className="Timetable-eventContainer"
              style={{ ...offset(ev), padding: '0.2em' }}>
                <Event ev={ev} halfsize={!!ev.secondary} />
                {ev.secondary && (
                  <div
                  className="Timetable-eventContainer"
                  style={offset(ev.secondary)}>
                    <Event 
                      ev={ev.secondary}
                      halfsize={true}/>
                  </div>
                )}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

const Event = ({ ev, halfsize, style }) => (
  <div className={`Timetable-event ${halfsize ? 'Timetable-event--halfsize' : ''}`}
       style={{ ...style, backgroundColor: bgColor(ev.exclusiveTo) }}>
    <h1>{ev.name}</h1>
    {ev.place && (
      <p>
        <FiMapPin />&nbsp;{ev.place}
      </p>
    )}
  </div>
);

const offset = ev => ({
  marginTop: ev.offset * QUARTHER_HOUR_IN_PIXELS,
  height: ev.height * QUARTHER_HOUR_IN_PIXELS,
});

export default Timetable;