import React from 'react';
import PropTypes from 'prop-types';
import { reformDatas } from '../../utils/formatedData';
import styles from './index.module.css';
import {
  // ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';

const RadarChartDisplay = ({ userPerf }) => {
  let datas = null;
  if (userPerf) {
    datas = reformDatas(userPerf);
  }

  return userPerf ? (
    <div className={styles.radarchart}>
      <RadarChart
        outerRadius={75}
        data={datas}
        width={260}
        height={230}
        style={{ background: '#282D30', borderRadius: '10px' }}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey='kind'
          orient={30}
          style={{ color: '#fff' }}
          stroke={'#fff'}
          tickLine={false}
          radius={10}
          fontSize={12}
          strokeWidth={1}
        />
        <Radar dataKey='value' stroke='red' fill='red' fillOpacity={0.6} />
      </RadarChart>
    </div>
  ) : (
    <progress></progress>
  );
};

RadarChartDisplay.propTypes = {
  userPerf: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object),
    kind: PropTypes.object,
    userId: PropTypes.number.isRequired,
  }),
};

export default RadarChartDisplay;
