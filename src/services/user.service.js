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
          JSON.stringify(user);
          JSON.stringify(activity);
          JSON.stringify(session);
          JSON.stringify(performance);

          return transformDataUser(user, activity, session, performance);
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
          JSON.stringify(user);
          JSON.stringify(activity);
          JSON.stringify(session);
          JSON.stringify(performance);

          return transformDataUser(user, activity, session, performance);
        })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };
}
