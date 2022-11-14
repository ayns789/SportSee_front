import './styles.css';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  //   Legend
} from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function App() {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      style={{ background: 'red', borderRadius: '10px' }}
      margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
    >
      <XAxis
        dataKey='name'
        axisLine={false}
        tickLine={false}
        padding={{ right: 20, left: 20 }}
        stroke={'#fff'}
        interval={'preserveStartEnd'}
      />
      <YAxis hide padding={{ top: 60, bottom: 30 }} />
      {/* <CartesianGrid strokeDasharray='3 3' /> */}
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Line type='natural' dataKey='pv' dot={false} stroke={'#FFF'} strokeWidth={2} />
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
  );
}
