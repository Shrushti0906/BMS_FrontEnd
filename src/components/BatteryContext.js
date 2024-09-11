// src/BatteryContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const BatteryContext = createContext();

export const BatteryProvider = ({ children }) => {
  const generateBatteryData = () => (
    Array.from({ length: 26 }, (v, i) => ({
      id: i + 1,
      voltage: (Math.random() * 12).toFixed(2),
      current: (Math.random() * 5).toFixed(2),
      power: (Math.random() * 60).toFixed(2),
      history: []
    }))
  );

  const [batteryData, setBatteryData] = useState(generateBatteryData);
  const [startTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryData(prevData => prevData.map(battery => {
        const newVoltage = (Math.random() * 12).toFixed(2);
        const newCurrent = (Math.random() * 5).toFixed(2);
        const newPower = (Math.random() * 60).toFixed(2);
        const elapsedTime = Math.floor((new Date() - startTime) / 1000); // Calculate elapsed time in seconds
        const newHistory = [...battery.history, { time: elapsedTime, voltage: newVoltage }];
        
        return {
          ...battery,
          voltage: newVoltage,
          current: newCurrent,
          power: newPower,
          history: newHistory
        };
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  return (
    <BatteryContext.Provider value={batteryData}>
      {children}
    </BatteryContext.Provider>
  );
};

export const useBatteryData = () => useContext(BatteryContext);
