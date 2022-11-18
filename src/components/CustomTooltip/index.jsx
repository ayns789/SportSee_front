import React from 'react';
import style from './index.module.css';
import PropTypes from 'prop-types';

function placeLabelIntoTooltip(payload) {
  if (typeof payload[0].unit !== 'undefined') {
    return (
      <p className={style.tooltipPara}>
        {payload[0].value} {payload[0].unit}
      </p>
    );
  }
  if (payload && payload.length) {
    return payload.map((prop, id) => {
      return prop.dataKey === 'calories' ? (
        <li className={style.tooltipList} key={id}>
          {prop.value}kCal
        </li>
      ) : (
        <li className={style.tooltipList} key={id}>
          {prop.value}Kg
        </li>
      );
    });
  }

  return null;
}

/**
 * If the tooltip is active and there is data to display, then display the data.
 * @prop {Boolean} active whether the component is active or not (mouse over)
 * @prop {ArrayOfObject} payload Properties of each componant Bar
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={style.customTooltip}>
        <ul className={style.into}>{placeLabelIntoTooltip(payload)}</ul>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
};

export default CustomTooltip;
