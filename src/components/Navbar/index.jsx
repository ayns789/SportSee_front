import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <header className={styles.header} role='banner'>
      <Link to='/'>
        <img src={Logo} className={styles.imgLogo} alt='logo sportSee' />
      </Link>
      <nav className={styles.nav}>
        <Link to='/' className={styles.navLink}>
          Accueil
        </Link>
        <Link to='/' className={styles.navLink}>
          Profil
        </Link>
        <Link to='/' className={styles.navLink}>
          Réglage
        </Link>
        <Link to='/' className={styles.navLink}>
          Communauté
        </Link>
      </nav>
    </header>
  );
}
