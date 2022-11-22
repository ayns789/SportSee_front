// import './styles.css';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import CustomTooltip from '../CustomTooltip';
import style from './index.module.css';

const BarChartDisplay = ({ sessions }) => {
  return sessions ? (
    <div className={style.container}>
      <p className={style.containerTitle}>Activité quotidienne</p>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={820}
          height={300}
          data={sessions}
          margin={{
            top: 30,
            right: 10,
            left: 30,
            bottom: 0,
          }}
          // padding={{ left: -20 }}
          barGap={6}
        >
          <CartesianGrid strokeDasharray='2 2' vertical={false} />
          <XAxis
            dataKey={'day'}
            axisLine={false}
            tickLine={false}
            padding={{ left: -45, right: -45 }}
            domain={['dataMin + 1', 'dataMax + 1']}
            tickFormatter={(v, i) => i + 1}
          />
          <YAxis
            orientation='right'
            axisLine={false}
            allowDecimals={false}
            dataKey={'kilogram'}
            yAxisId={1}
            tickLine={false}
            //   horizontalPoints={[80, 140, 200]}
            //   ticks={[1, 2, 3]}
            tickMargin={20}
            scale='linear'
            tickCount={2}
            domain={['dataMin - 10', 'dataMax + 10']}
            // dx={20}
          />
          <YAxis hide dataKey={'calories'} yAxisId={2} />
          <Tooltip
            content={<CustomTooltip />}
            labelStyle={{
              display: 'none',
            }}
            wrapperStyle={{
              color: '#FFF',
              background: 'red',
              border: 'none',
              outline: 'none',
              width: '50px',
              height: '70px',
              textAlign: 'center',
              lineHeight: '1.5',
            }}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          <Legend
            height={60}
            verticalAlign='top'
            align='right'
            iconType={'circle'}
            style={{ margin: '1rem auto', width: '100px' }}
            // dx={50}
          />
          <Bar
            dataKey='kilogram'
            fill='#282D30'
            radius={[5, 5, 0, 0]}
            barSize={7}
            yAxisId={1}
            name={'Poids (kg)'}
          />
          <Bar
            yAxisId={2}
            dataKey='calories'
            fill='#E60000'
            radius={[5, 5, 0, 0]}
            barSize={7}
            name={'Calories brûlées (kCal)'}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  ) : (
    <progress></progress>
  );
};

BarChartDisplay.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default BarChartDisplay;
