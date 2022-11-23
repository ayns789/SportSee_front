// *** design :
import styles from './index.module.css';
import icnAssis from '../../assets/icone_assis.svg';
import icnNager from '../../assets/icone_nager.svg';
import icnVelo from '../../assets/icone_velo.svg';
import icnHaltere from '../../assets/icone_haltere.svg';

export default function LeftBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.contentGlobal}>
        <div className={styles.contentIcones}>
          <img src={icnAssis} className={styles.icnAssis} alt='icone asseoir' />
          <img src={icnNager} className={styles.icnNager} alt='icone nager' />
          <img src={icnVelo} className={styles.icnVelo} alt='icone velo' />
          <img src={icnHaltere} className={styles.icnHaltere} alt='icone haltere' />
        </div>
        <div className={styles.contentParag}>
          <p className={styles.parag}>Copyryght, SportSee 2020</p>
        </div>
      </div>
    </div>
  );
}
