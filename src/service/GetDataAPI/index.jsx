import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useMemo } from 'react';

export const getData = async (userId) => {
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
        return { user, activity, session, performance };
      })
    )
    .catch((error) => {
      localStorage.setItem('error', error.message);
      throw new Error(error);
    });
};

// export default GetData;
