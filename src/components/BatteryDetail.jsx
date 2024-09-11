// src/BatteryDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useBatteryData } from './BatteryContext';
import './BatteryDetail.css';

// Register the necessary components for Chart.js
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BatteryDetail = () => {
  const { id } = useParams();
  const batteryData = useBatteryData();
  const battery = batteryData.find(b => b.id === parseInt(id));
  
  const chartData = {
    labels: battery.history.map(entry => `${entry.time}s`),
    datasets: [{
      label: 'Voltage (V)',
      data: battery.history.map(entry => entry.voltage),
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
      tension: 0.1
    }]
  };

  return (
    <div className="battery-detail-container">
      <h2>Battery {id} Details</h2>
      <p>Voltage: {battery.voltage}V</p>
      <p>Current: {battery.current}A</p>
      <p>Power: {battery.power}W</p>
      
      <div className="chart-container">
        <h3>Voltage Over Time</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default BatteryDetail;
