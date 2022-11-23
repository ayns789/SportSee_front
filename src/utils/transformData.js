/**
 * It takes 4 objects as arguments and returns an object with 4 properties.
 * </code>
 * @param a - {data: {data: {…}}}
 * @param b - {data: {data: {…}}}
 * @param c - {
 * @param d - {data: {data: {…}}}
 * @returns An object with 4 properties.
 */
export default function transformDataUser(a, b, c, d) {
  // *** to work with an array :
  //   const dataWithout2firstsLevels = [a.data.data, b.data.data, c.data.data, d.data.data];
  //   return dataWithout2firstsLevels;
  // *** to work with an object :
  const user = a.data.data;
  const userAct = b.data.data;
  const userSession = c.data.data;
  const userPerf = d.data.data;

  /* Checking if the user has a property called todayScore. If it does, it will create a new property
  called score and assign it the value of todayScore. Then it will delete the property todayScore. */
  if (user.todayScore) {
    // user['score'] = user['todayScore'];
    // delete user['todayScore'];
    delete Object.assign(user, { score: user.todayScore })['todayScore'];
  }

  return { user, userAct, userSession, userPerf };
}
