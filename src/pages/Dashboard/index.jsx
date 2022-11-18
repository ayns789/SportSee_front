import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// *** design ***
import styles from './index.module.css';
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
  const [isError, setIsError] = useState(null);

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
        console.log('error : ', error);
        setIsError(error);
      }
    }
    getUserData();
  }, [params.id, setUserData]);

  if (isError) {
    // redirect 404
  }

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
                    <div>
                      <LineChartDisplay userSession={userData.userSession} />
                    </div>
                    <div>
                      <RadarChartDisplay userPerf={userData.userPerf} />
                    </div>
                    <div>
                      <RadialChartDisplay
                        score={
                          userData.user.todayScore ? userData.user.todayScore : userData.user.score
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>...</div>
      )}
    </div>
  );
};

export default Dashboard;
// {userData.user.userInfos.firstName}
// {userData[2].sessions[6].sessionLength}
// {userData[0].userInfos.firstName}
