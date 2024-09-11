// src/components/BatteryCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GaugeChartFunc from './GaugeChart';
import './BatteryCard.css';

const BatteryCard = ({ id, voltage, current, power }) => {
  const navigate = useNavigate();

  return (
    <div className="battery-card" onClick={() => navigate(`/battery/${id}`)}>
      <h3>Battery {id}</h3>
      <GaugeChartFunc value={parseFloat(voltage)} />
      <p>Voltage: {voltage}V</p>
      <p>Current: {current}A</p>
      <p>Power: {power}W</p>  
    </div>
  );
};

export default BatteryCard;
