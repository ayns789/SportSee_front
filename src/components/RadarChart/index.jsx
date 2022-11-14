import './styles.css';
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  // ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default function App() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <RadarChart width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis
        dataKey='subject'
        orient={30}
        tickLine={false}
        radius={10}
        fontSize={12}
        strokeWidth={1}
      />
      <Radar dataKey='A' stroke='red' fill='red' fillOpacity={0.6} />
    </RadarChart>
    //  </ResponsiveContainer>
  );
}
