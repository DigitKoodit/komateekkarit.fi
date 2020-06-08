import React from 'react';
import { FiMapPin } from 'react-icons/fi';

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
              style={{
                marginTop: ev.offset * QUARTHER_HOUR_IN_PIXELS,
                height: ev.height * QUARTHER_HOUR_IN_PIXELS
              }}>
                <div className="Timetable-event">
                  <h1>{ev.name}</h1>
                  {ev.place && (
                    <p>
                      <FiMapPin />&nbsp;{ev.place}
                    </p>
                  )}
                </div>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Timetable;