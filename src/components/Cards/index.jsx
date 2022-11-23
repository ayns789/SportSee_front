// *** datas :
import PropTypes from 'prop-types';
// *** design :
import icnCalories from '../../assets/icone_flamme.svg';
import icnProteines from '../../assets/icone_proteines.svg';
import icnGlucides from '../../assets/icone_burger.svg';
import icnLipides from '../../assets/icone_pomme.svg';
import styles from './index.module.css';

const Card = ({ type, countValue }) => {
  let img;
  let unit = 'g';
  let name;

  switch (type) {
    case 'calorie':
      img = icnCalories;
      unit = 'kCal';
      name = 'Calories';
      countValue = (countValue / 1000).toPrecision(4);
      break;
    case 'protein':
      img = icnProteines;
      name = 'Proteines';
      break;
    case 'lipide':
      img = icnGlucides;
      name = 'Lipides';
      break;
    case 'glucide':
      img = icnLipides;
      name = 'Glucides';
      break;
    default:
    // code block
  }

  return typeof type === 'string' && !isNaN(countValue) ? (
    <div className={styles.card}>
      <div className={styles.cardBoxIcn}>
        <img src={img} alt='icon' className={styles.cardIcn} />
      </div>
      <div className={styles.cardBoxData}>
        <p className={styles.cardData}>
          <strong>{countValue}</strong>
          <strong>{unit}</strong>
        </p>
        <span className={styles.cardDataType}>{name}</span>
      </div>
    </div>
  ) : (
    <progress></progress>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  countValue: PropTypes.number.isRequired,
};

export default Card;
