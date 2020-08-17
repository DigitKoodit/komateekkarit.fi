import React from 'react';
import { FiMapPin, FiClock } from 'react-icons/fi';

import bgColor from './bgColor';

const MobileHappenings = ({ happenings }) => (
  <div className="Happenings_mobile">
    {happenings.map(day => (
      <div className="Day">
        <h2>{day.title}</h2>
        {day.events.map(ev => (
          <div className="MobileEventContainer">
            <Event ev={ev} />
            {ev.secondary && <Event ev={ev.secondary} />}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Event = ({ ev }) => (
  <div className="Event"
        style={{ backgroundColor: bgColor(ev.exclusiveTo) }}>
    <h3>{ev.name}</h3>
    <p>
      <FiClock/>&nbsp;{ev.time}
    </p>
    {ev.place && (
      <p>
        <FiMapPin />&nbsp;{ev.place}
      </p>
    )}
  </div>
)

export default MobileHappenings;