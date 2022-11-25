import axios from 'axios';
import transformDataUser from '../utils/transformData.js';

/* It's a class that has two methods, one that gets data from an API and one that gets data from a
mocked API. */
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
          return transformDataUser(user, activity, session, performance);
        })
      )
      .catch((error) => {
        throw new Error(error);
      });
  };
}
