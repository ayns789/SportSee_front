// *** LineChart

/**
 * It takes a number as an argument and returns a string.
 * @param numDay - number of the day of the week (1-7)
 * @returns the value of the array at the index of the number passed in.
 */
export function handleFormatTick(numDay) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  switch (numDay) {
    case 1:
      return days[0];
    case 2:
      return days[1];
    case 3:
      return days[2];
    case 4:
      return days[3];
    case 5:
      return days[4];
    case 6:
      return days[5];
    case 7:
      return days[6];
    default:
    // do nothing
  }
}

// *** Barchart

/**
 * It takes a string in the format "YYYY-MM-DD" and returns the day of the month as a number
 * @param day - The day of the month.
 * @returns The day of the month.
 */
export function customTick(day) {
  // console.log('day slice : ', Number(day.slice(8)));
  return Number(day.slice(8));

  // Object.entries(day).forEach(([key, value]) => {
  // });
}

// *** RadarChart

/**
 * The function takes a string as an argument and returns the French translation of the string if it
 * exists in the words object. If the string does not exist in the words object, the function returns
 * undefined
 * @param str - the string to translate
 * @returns The value of the key in the object.
 */
function englishToFrench(str) {
  const words = {
    energy: 'énergie',
    strength: 'force',
    speed: 'vitesse',
    intensity: 'intensité',
    cardio: 'cardio',
    endurance: 'endurance',
  };
  // console.log('translate words : ', words[str]);
  return words[str];
}

/**
 * It takes a string, capitalizes the first letter, and then lowercases the rest of the string.
 * @param str - The string to be converted.
 * @returns The first character of the string is converted to uppercase and the rest of the string is
 * converted to lowercase.
 */
function fromLowerToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * It takes an object with two properties, one is an array of objects and the other is an array of
 * strings. It then loops through the array of objects and compares the value of the property "kind"
 * with the value of the array of strings. If the value of the property "kind" is equal to the value of
 * the array of strings, it then calls a function that converts the value of the array of strings to
 * French and then calls another function that converts the first letter of the value of the array of
 * strings to uppercase.
 * @param obj - {
 * @returns An array of objects.
 */
export function reformDatas(obj) {
  // console.log(obj.data);
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = englishToFrench(obj.kind[key + 1]);
      nbrKind.kind = fromLowerToUpperCase(frenchDatas);
    }
    // console.log(nbrKind);
    return nbrKind;
  });
}
