// *** LineChart

/**
 * It takes a number between 1 and 7 and returns the corresponding day of the week.
 * @param numDay - the number of the day of the week (1-7)
 * @returns the value of the array at the index of numDay - 1.
 */
export function handleFormatTick(numDay) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  return days[numDay - 1];
}

// *** RadarChart

/**
 * It takes an index as an argument, and returns the word at that index in the array, with the first
 * letter capitalized.
 * @param index - the index of the word in the array
 * @returns The first letter of the word is being returned in uppercase and the rest of the word is
 * being returned in lowercase.
 */
function englishToFrench(index) {
  const words = ['énergie', 'force', 'vitesse', 'intensité', 'cardio', 'endurance'];
  return words[index].charAt(0).toUpperCase() + words[index].substring(1).toLowerCase();
}

export function reformDatas(obj) {
  // console.log(obj.data);
  return obj.data.map((nbrKind, key) => {
    nbrKind.kind = englishToFrench(key);
    return nbrKind;
  });
}
