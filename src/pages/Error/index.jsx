// import * as React from 'react';
// import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { useEffect } from 'react';

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contentMessageError404}>
      <h1 className={styles.messageError404}> erreur 404 </h1>
      <p className={styles.paragError404}>La ressource demandée n'existe pas</p>
      <p className={styles.paragError404}>Veuillez vous rendre sur la page d'accueil</p>
    </div>
  );
};

export default Error;
