/**
 * It takes an object with a data property, and returns the data property of that object
 * @param x - the response from the API
 * @returns The data.data property of the object passed in.
 */
export default function transformDataUser(a, b, c, d) {
  const y = [a.data.data, b.data.data, c.data.data, d.data.data];
  return y;
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
