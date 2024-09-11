// src/GaugeChart.js
import React from 'react';
import GaugeChart from 'react-gauge-chart';

function GaugeChartFunc(props) {
  const per = props.value/(36);
  return (
    <GaugeChart id="gauge-chart1" 
          nrOfLevels={20} 
          percent = {per} 
          textColor="black"
          formatTextValue={(value) => `${props.value}V`}
          colors = {["#FF0000","#00FF00" ]}
        />
  )
};

export default GaugeChartFunc;
