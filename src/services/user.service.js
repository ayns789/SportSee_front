import axios from 'axios';
import transformDataUser from '../utils/transformData.js';

export class UserService {
  getData = async (userId) => {
    const baseUrl = 'http://localhost:3000/user/';
    const endPoints = [
      `${baseUrl}${userId}`,
      `${baseUrl}${userId}/activity`,
      `${baseUrl}${userId}/average-sessions`,
      `${baseUrl}${userId}/performance`,
    ];
    return axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then(
        axios.spread((user, activity, session, performance) => {
          // console.log(
          //   'USER : ',
          //   user,
          //   'USERact : ',
          //   activity,
          //   'USERsession : ',
          //   session,
          //   'USERperf : ',
          //   performance
          // );
          JSON.stringify(user);
          JSON.stringify(activity);
          JSON.stringify(session);
          JSON.stringify(performance);
          // console.log('transform : ', transformData(user));
          return {
            // remplacer par une fonction
            user: user.data.data,
            activity: activity.data.data,
            session: session.data.data,
            performance: performance.data.data,
          };
        })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };

  getMockedData = () => {
    const endPoints = ['/user.json', '/userAct.json', '/userSession.json', '/userPerf.json'];
    return axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then(
        axios.spread((user, activity, session, performance) => {
          // console.log(
          //   'USERmock : ',
          //   user,
          //   'USERactmock : ',
          //   activity,
          //   'USERsessionmock : ',
          //   session,
          //   'USERperfmock : ',
          //   performance
          // );
          JSON.stringify(user);
          JSON.stringify(activity);
          JSON.stringify(session);
          JSON.stringify(performance);
          // console.log(transformDataUser(user, activity, session, performance));
          // console.log('data of user : ', user, activity, session, performance);
          // console.log('user is : ', user);
          // return transformData(user);
          // return {
          //   // // remplacer par une fonction
          //   user: user.data.data,
          //   activity: activity.data.data,
          //   session: session.data.data,
          //   performance: performance.data.data,
          // };
          // const datas = transformDataUser(user, activity, session, performance);
          // return datas;
          return transformDataUser(user, activity, session, performance);
        })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };
}
