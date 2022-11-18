/**
 * It takes 4 objects as arguments, and returns an object with 4 properties
 * @param a - {data: {data: {…}}}
 * @param b - {data: {data: {…}}}
 * @param c - {data: {data: {…}}}
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
  // const datas = { user, userAct, userSession, userPerf };
  return { user, userAct, userSession, userPerf };
}

// const Person = {
//     name: "Hadie Danker",
//     sex: "male",
//     adress: {
//         country: "ID",
//         state: "France",
//         city: "OKU",
//         pincode: "123456"
//     }
// }

// const {adress : { state, pincode }, name} = Person;
