/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */

/**
 * Returns an index of the specified element in array or -1 if element is not found
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}

/**
 * Generates an array of odd numbers of the specified length
 */
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

/**
 * Returns an array of positive numbers from the specified array in original order
 */
function getArrayOfPositives(arr) {
  return arr.filter(num => num > 0);
}

/**
 * Returns the array with strings only in the specified array (in original order)
 */
function getArrayOfStrings(arr) {
  return arr.filter(item => typeof item === 'string');
}

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

/**
 * Returns the array of uppercase strings from the specified array
 */
function getUpperCaseStrings(arr) {
  return arr.map(str => str.toUpperCase());
}

/**
 * Returns the array of string lengths from the specified string array.
 */
function getStringsLength(arr) {
  return arr.map(str => str.length);
}

/**
 * Inserts the item into specified array at specified index
 */
function insertItem(arr, item, index) {
  return [...arr.slice(0, index), item, ...arr.slice(index)];
}

/**
 * Returns the n first items of the specified array
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

/**
 * Returns the n last items of the specified array
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

/**
 * Returns CSV representation of two-dimensional numeric array.
 */
function toCsvText(arr) {
  return arr.map(row => row.join(',')).join('\n');
}

/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 */
function toArrayOfSquares(arr) {
  return arr.map(num => num * num);
}

/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 */
function getMovingSum(arr) {
  let sum = 0;
  return arr.map(num => sum += num);
}

/**
 * Returns every second item from the specified array:
 */
function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 === 1);
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, tree third items etc.
 */
function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

/**
 * Returns the 3 largest numbers from the specified array
 */
function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

/**
 * Returns the number of positive numbers from specified array
 */
function getPositivesCount(arr) {
  return arr.filter(item => typeof item === 'number' && item > 0).length;
}

/**
 * Sorts digit names
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitMap = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
    'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
  };
  return arr.sort((a, b) => digitMap[a] - digitMap[b]);
}

/**
 * Returns the sum of all items in the specified array of numbers
 */
function getItemsSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * Returns the number of all falsy value in the specified array
 */
function getFalsyValuesCount(arr) {
  return arr.filter(item => !item).length;
}

/**
 * Returns a number of all occurrences of the specified item in an array
 */
function findAllOccurrences(arr, item) {
  return arr.filter(element => element === item).length;
}

/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 */
function toStringList(arr) {
  return arr.join(',');
}

/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 */
function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

/**
 * Creates an identity matrix of the specified size
 */
function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) => 
    Array.from({ length: n }, (_, j) => i === j ? 1 : 0)
  );
}

/**
 * Creates an array of integers from the specified start to end (inclusive)
 */
function getIntervalArray(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

/**
 * Returns array containing only unique values from the specified array.
 */
function distinct(arr) {
  return [...new Set(arr)];
}

/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 */
function group(array, keySelector, valueSelector) {
  const map = new Map();
  array.forEach(item => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
  });
  return map;
}

/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 */
function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

/**
 * Returns an element from the multidimensional array by the specified indexes.
 */
function getElementByIndexes(arr, indexes) {
  return indexes.reduce((current, index) => current[index], arr);
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 */
function swapHeadAndTail(arr) {
  const middle = Math.floor(arr.length / 2);
  const head = arr.slice(0, middle);
  const tail = arr.slice(-middle);
  const mid = arr.length % 2 === 1 ? [arr[middle]] : [];
  return [...tail, ...mid, ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};