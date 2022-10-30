import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <header className={styles.nav} role='banner'>
      <Link to='/'>
        <img src={Logo} className={styles.imgLogo} alt='logo sportSee' />
        <p className={styles.paragLogo}>SportSee</p>
      </Link>
      <nav>
        <Link to='/' className={styles.navLink}>
          Accueil
        </Link>
        <Link to='/profil' className={styles.navLink}>
          Profil
        </Link>
        <Link to='/reglage' className={styles.navLink}>
          Réglage
        </Link>
        <Link to='/communaute' className={styles.navLink}>
          Communauté
        </Link>
      </nav>
    </header>
  );
}
