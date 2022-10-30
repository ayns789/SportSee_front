// import Card from '../components/Card';
// import Navbar from '../components/Navbar';
import styles from '../App.css';
// import { useContext, useEffect } from 'react';
// import { LodgingContext } from '../components/Router/index.jsx';

const Home = () => {
  //   const lodgings = useContext(LodgingContext);

  //   if (lodgings.length <= 0 || !lodgings) {
  //     return <progress></progress>;
  //   }

  return (
    <div className={styles.contentPage}>
      {/* <Navbar /> */}
      {/* <div className={styles.container}>
        {lodgings.map((lodging) => (
          <Card key={lodging.id} cover={lodging.cover} id={lodging.id} title={lodging.title} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
