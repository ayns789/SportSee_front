import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// *** design ***
import styles from './index.module.css';
import './loading.css';
// *** components ***
import LeftBar from '../../components/LeftBar';
import BarChartDisplay from '../../components/BarChart';
import LineChartDisplay from '../../components/LineChart';
import RadarChartDisplay from '../../components/RadarChart';
import RadialChartDisplay from '../../components/RadialChart';
// *** datas ***
import { UserService } from '../../services/user.service';

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
        // console.log('userAct : ', userDatas.userAct);
        // console.log('userPerf : ', userDatas.userPerf);
        // console.log('userSession : ', userDatas.userSession);

        // Placement of data in the useState
        setUserData(userDatas);
        localStorage.clear();
      } catch (error) {
        const messageErrorSave = error.toString();
        // console.log('error done : ', e.includes('404'));
        // localStorage.setItem('error', messageErrorSave);
        setError(messageErrorSave);
        // setIsLoading(false);
      }
    }
    getUserData();
  }, [params.id, setUserData, setError]);

  const gestureEmptyData = () => {
    if (!userData && error && error.includes('404')) {
      return <h1> erreur 404 </h1>;
    } else if (!userData && error && error.includes('503')) {
      return (
        <h1 className={styles.messageError}>serveur indisponible, veuillez réessayer plus tard</h1>
      );
    } else {
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
              </div>
            </div>
          </div>
        </>
      ) : (
        // <h1 className={styles.messageError}>serveur indisponible, veuillez réessayer plus tard</h1>
        gestureEmptyData()

        // <div className='contentAnimation'>
        //   <div className='lds-hourglass'>
        //     <p>Les données sont en train de se charger</p>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default Dashboard;
