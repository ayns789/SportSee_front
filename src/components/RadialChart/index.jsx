import React from 'react';
// *** data :
import PropTypes from 'prop-types';
// *** recharts :
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
// *** design :
import styles from './index.module.css';

/**
 * It takes a data object as an argument, and returns a RadialBarChart component
 *
 * @param   {object}  score  Contain datas from the API about user score.
 *
 * @return  {React.ReactElement}
 */
const RadialChartDisplay = (score) => {
  const datas = [];
  datas.push(score);
  const dataValue = 360 * datas[0].score;

  const style = {
    background: '#fff',
    fill: 'red',
  };

  return (
    <div className={styles.radialchart}>
      <h3 className={styles.title}>Score</h3>
      <div className={styles.blocScore}>
        <p className={styles.score}>{datas[0].score * 100}%</p>
        <span className={styles.text}>de votre objectif</span>
      </div>

      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart
          cx='50%'
          cy='50%'
          innerRadius='60%'
          outerRadius='90%'
          barSize={8}
          startAngle={90}
          endAngle={90 + dataValue}
          //   clockWise={true}
          //   minAngle={0}
          data={datas}
          style={{ background: 'transparent' }}
          //   width={220}
          //   height={180}
        >
          <RadialBar
            background={{ fill: '#fbfbfb' }}
            dataKey={'score'}
            style={style}
            cornerRadius={5}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadialChartDisplay.propTypes = {
  score: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

export default RadialChartDisplay;
