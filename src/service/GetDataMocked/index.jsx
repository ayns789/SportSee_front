import axios from 'axios';
import { useEffect } from 'react';
// import { useMemo } from 'react';

function GetData() {
  let pathUser = '/DataMocked/user.json';
  let pathUserAct = '/DataMocked/userAct.json';
  let pathUserSession = '/DataMocked/userSession.json';
  let pathUserPerf = '/DataMocked/userPerf.json';

  const requestOne = axios.get(pathUser);
  const requestTwo = axios.get(pathUserAct);
  const requestThree = axios.get(pathUserSession);
  const requestFour = axios.get(pathUserPerf);

  useEffect(() => {
    axios
      .all([requestOne, requestTwo, requestThree, requestFour])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          const responesThree = responses[2];
          const responesFour = responses[3];
          // use/access the results
          console.log(responseOne, responseTwo, responesThree, responesFour);
        })
      )
      .catch((errors) => {
        // react on errors.
        console.log(errors);
      });
  }, [requestOne, requestTwo, requestThree, requestFour]);
}

export default GetData;
