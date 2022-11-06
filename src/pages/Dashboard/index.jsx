// import axios from 'axios';
import styles from './index.module.css';
// import { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import LeftBar from '../../components/LeftBar';
import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { createContext } from 'react';
import { getData } from '../../service/GetDataAPI/index';
import User from '../../models/User';
import UserPerf from '../../models/UserPerf';
import UserSession from '../../models/UserSession';
import UserAct from '../../models/UserAct';

const Dashboard = () => {
  // console.log('params : ', params);

  // const params.id = 12;
  const params = useParams();
  // const userId = localStorage.getItem('userId');
  // console.log('params id : ', params);
  const [user, setUser] = useState(null);
  const [userAct, setUserAct] = useState(null);
  const [userSession, setUserSession] = useState(null);
  const [userPerf, setUserPerf] = useState(null);

  // console.log({ user });
  console.log('id : ', params.id);
  console.log('user : ', user);
  console.log('userAct : ', userAct);
  console.log('userSession : ', userSession);
  console.log('userPerf : ', userPerf);

  const [isData, setIsData] = useState(false);

  useEffect(() => {
    async function getUserData() {
      try {
        const userDatas = await getData(params.id);
        // console.log('userDatas', userDatas);
        const userData = new User(userDatas.user.data);
        const userActData = new UserAct(userDatas.activity.data);
        const userSessionData = new UserSession(userDatas.session.data);
        const userPerfData = new UserPerf(userDatas.performance.data);
        // console.log('userData bis : ', userData);
        setUser(userData);
        setUserAct(userActData);
        setUserSession(userSessionData);
        setUserPerf(userPerfData);

        setIsData(true);
      } catch (error) {
        console.log('error : ', error);
      }
    }

    getUserData();
  }, [params.id, setUser, setUserAct, setUserSession, setUserPerf]);
  // }

  return (
    <div className={styles.bodyPage}>
      <LeftBar />
      {isData ? (
        <div className={styles.contentPage}>
          <h1 className={styles.h1Page}>
            Bonjour <span className={styles.h1PageName}>{user.data.userInfos.firstName}</span>
          </h1>

          <p className={styles.paragH1}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      ) : (
        <div>...</div>
      )}
    </div>
  );
};

export default Dashboard;
