// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BatteryCard from './components/BatteryCard';
import BatteryDetail from './components/BatteryDetail';
import Header from './components/Header';
import { useBatteryData } from './components/BatteryContext'; // Import the useBatteryData hook
import './App.css';

const App = () => {
  const batteryData = useBatteryData();
  const [showAll, setShowAll] = useState(false);

  const filteredData = showAll ? batteryData : batteryData.filter(battery => battery.voltage < 5);

  return (
    <Router>
      <Header showAll={showAll} setShowAll={setShowAll} />
      <Routes>
        <Route path="/" element={
          <div>
            <div className="button">
              <button onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Low Voltage Batteries' : 'Show All Batteries'}
              </button>
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
        } />
        <Route path="/battery/:id" element={<BatteryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
