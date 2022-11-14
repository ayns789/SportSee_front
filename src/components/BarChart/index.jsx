import './styles.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: '1',
    uv: 10,
    pv: 10,
    amt: 40,
  },
  {
    name: '2',
    uv: 30,
    pv: 29,
    amt: 21,
  },
  {
    name: '3',
    uv: 20,
    pv: 40,
    amt: 29,
  },
  {
    name: '4',
    uv: 28,
    pv: 18,
    amt: 20,
  },
  {
    name: '5',
    uv: 19,
    pv: 50,
    amt: 28,
  },
  {
    name: '6',
    uv: 29,
    pv: 40,
    amt: 20,
  },
  {
    name: '7',
    uv: 49,
    pv: 30,
    amt: 10,
  },
  {
    name: '8',
    uv: 40,
    pv: 30,
    amt: 21,
  },
  {
    name: '9',
    uv: 49,
    pv: 30,
    amt: 10,
  },
  {
    name: '10',
    uv: 39,
    pv: 43,
    amt: 20,
  },
];

export default function App() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='2 2' vertical={false} />
      <XAxis dataKey='name' axisLine={false} tickLine={false} />
      <YAxis orientation='right' axisLine={false} allowDecimals={false} />
      <Tooltip />
      <Legend
        height={80}
        verticalAlign='top'
        align='right'
        iconType={'circle'}
        style={{ margin: '1rem auto', width: '100px' }}
      />
      <Bar dataKey='pv' fill='#282D30' radius={[5, 5, 0, 0]} barSize={8} />
      <Bar
        dataKey='uv'
        fill='#E60000'
        radius={[5, 5, 0, 0]}
        barSize={8}
        name={'Calories brûlées (kCal)'}
      />
    </BarChart>
  );
}
