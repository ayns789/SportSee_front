import React, { useEffect, useState } from 'react';
// *** design ***
import styles from './index.module.css';
import imgManutention from '../../assets/img_ouvrier.jpg';
import './loading.css';
// *** components ***
import LeftBar from '../../components/LeftBar';
import BarChartDisplay from '../../components/BarChart';
import LineChartDisplay from '../../components/LineChart';
import RadarChartDisplay from '../../components/RadarChart';
import RadialChartDisplay from '../../components/RadialChart';
import Card from '../../components/Cards';
// *** datas ***
import { useParams } from 'react-router-dom';
import { UserService } from '../../services/user.service';
import Redirection from '../../components/Redirection';

const Dashboard = () => {
  // *** id
  const params = useParams();

  // *** gesture data
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getUserData() {
      try {
        const userService = new UserService();
        // *** data from api :
        const userDatas = await userService.getData(params.id);
        // *** data mocked :
        // const userDatas = await userService.getMockedData();

        console.log('user : ', userDatas.user);
        console.log('userAct : ', userDatas.userAct);
        console.log('userPerf : ', userDatas.userPerf);
        console.log('userSession : ', userDatas.userSession);

        // Placement of data in the useState
        setUserData(userDatas);
      } catch (error) {
        const messageErrorSave = error.toString();
        setError(messageErrorSave);
      }
    }
    getUserData();
  }, [params.id]);

  const gestureEmptyData = () => {
    //  context 404
    if (error.includes('404')) {
      return <Redirection />;
    }
    //  context 503
    else if (error.includes('503') || error.includes('Network Error')) {
      return (
        <div className={styles.contentPageError503}>
          <div className={styles.contentMessageError503}>
            <h1 className={styles.messageError503}>
              erreur 503 : serveur indisponible, veuillez réessayer plus tard
            </h1>
          </div>
          <div className={styles.containerImg503}>
            <img src={imgManutention} alt='manutention' className={styles.img503} />
          </div>
        </div>
      );
    }
    //  global context
    else {
      return (
        <div className='contentAnimation'>
          <div className='lds-hourglass'>
            <p>Les données sont en train de se charger</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.bodyPage}>
      <LeftBar />
      {userData ? (
        <>
          <div className={styles.placementPage}>
            <div className={styles.contentPage}>
              <h1 className={styles.h1Page}>
                Bonjour{' '}
                <span className={styles.h1PageName}>{userData.user.userInfos.firstName}</span>
              </h1>
              <p className={styles.paragH1}>
                Félicitations ! Vous avez explosé vos objectifs hier 👏
              </p>
              <div className={styles.container}>
                <div className={styles.containerGraphs}>
                  <div className={styles.containerBarChart}>
                    <BarChartDisplay sessions={userData.userAct.sessions} />
                  </div>

                  <div className={styles.containerDownGraphs}>
                    <LineChartDisplay userSession={userData.userSession} />
                    <RadarChartDisplay userPerf={userData.userPerf} />
                    <RadialChartDisplay score={userData.user.score} />
                  </div>
                </div>
                <div className={styles.containerCards}>
                  <Card type='calorie' countValue={userData.user.keyData.calorieCount} />
                  <Card type='protein' countValue={userData.user.keyData.proteinCount} />
                  <Card type='glucide' countValue={userData.user.keyData.carbohydrateCount} />
                  <Card type='lipide' countValue={userData.user.keyData.lipidCount} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        gestureEmptyData()
      )}
    </div>
  );
};

export default Dashboard;
