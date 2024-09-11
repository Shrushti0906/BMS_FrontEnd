import React, { useState } from 'react';
import BatteryCard from './BatteryCard';

const BatteryLevelDetail = (props) => {
    const [showAll, setShowAll] = useState(false);
    const filteredData = showAll ? props.data : props.data.filter(battery => battery.voltage < 5);
    return (
      <div className="detail-container">
        <div className="header">
              <header className="App-header">
                <h1>Battery Management System</h1>
                <button onClick={() => props.data(!showAll)}>
                  {showAll ? 'Show Low Voltage Batteries' : 'Show All Batteries'}
                </button>
              </header>
            </div>
            <div className="container">
              {filteredData.map(battery => (
                <div className="battery" key={battery.id}>
                  <BatteryCard
                    id={battery.id}
                    voltage={battery.voltage}
                    current={battery.current}
                    power={battery.power}
                  />
                </div>
              ))}
            </div>
      </div>
    );
  };
  
  export default BatteryLevelDetail;