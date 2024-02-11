/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
    return (a === b && b !== c) || (a === c && a !== b) || (b === c && a !== b);
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1 || num > 39) {
    throw new Error('Input is out of range (1-39)');
  }

  const romanSymbols = ['X', 'IX', 'V', 'IV', 'I'];
  const arabicValues = [10, 9, 5, 4, 1];

  let result = '';
  let remaining = num;

  for (let i = 0; i < arabicValues.length; i += 1) {
    const value = arabicValues[i];
    const symbol = romanSymbols[i];

    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digitWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const negativeWord = 'minus';
  const pointWord = 'point';
  let result = '';
  let isNegative = false;
  let hasDecimal = false;
  let tempResult = '';
  let tempDecimal = '';
  const strLength = numberStr.length;
  for (let i = 0; i < strLength; i += 1) {
    const char = numberStr[i];
    if (char === '-') {
      isNegative = true;
    } else if (char === '.' || char === ',') {
      hasDecimal = true;
    } else if (!Number.isNaN(parseInt(char, 10))) {
      if (!hasDecimal) {
        const digitWord = digitWords[parseInt(char, 10)];
        tempResult +=
          (tempResult && tempResult[tempResult.length - 1] !== ' ' ? ' ' : '') +
          digitWord;
      } else {
        const digitWord = digitWords[parseInt(char, 10)];
        tempDecimal +=
          (tempDecimal && tempDecimal[tempDecimal.length - 1] !== ' '
            ? ' '
            : '') + digitWord;
      }
    }
  }
  result = `${tempResult}${hasDecimal ? ` ${pointWord} ${tempDecimal}` : ''}`;
  if (isNegative) {
    result = `${negativeWord} ${result}`;
  }
  let trimmedResult = '';
  let startIdx = 0;
  let endIdx = result.length - 1;
  while (result[startIdx] === ' ') {
    startIdx += 1;
  }
  while (result[endIdx] === ' ') {
    endIdx -= 1;
  }
  for (let i = startIdx; i <= endIdx; i += 1) {
    trimmedResult += result[i];
  }
  return trimmedResult;
}
/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  function areEqual(char1, char2) {
    return char1.toLowerCase() === char2.toLowerCase();
  }

  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (!/[a-zA-Z]/.test(str[i])) {
      i += 1;
    } else if (!/[a-zA-Z]/.test(str[j])) {
      j -= 1;
    } else if (!areEqual(str[i], str[j])) {
      return false;
    } else {
      i += 1;
      j -= 1;
    }
  }
  return true;
}
/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numAbs = Math.abs(num);
  while (numAbs > 0) {
    const currDigit = numAbs % 10;
    if (currDigit === digit) {
      return true;
    }
    numAbs = Math.floor(numAbs / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }
  let leftSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum -= arr[i];
    if (leftSum === totalSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
  }

  let value = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = value;
      value += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = value;
      value += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = value;
      value += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = value;
      value += 1;
    }
    left += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const size = matrix.length;
  const rotatedMatrix = [];
  for (let i = 0; i < size; i += 1) {
    rotatedMatrix.push([...matrix[i]]);
  }
  for (let i = 0; i < size / 2; i += 1) {
    for (let j = i; j < size - i - 1; j += 1) {
      const temp = rotatedMatrix[i][j];
      rotatedMatrix[i][j] = rotatedMatrix[size - 1 - j][i];
      rotatedMatrix[size - 1 - j][i] =
        rotatedMatrix[size - 1 - i][size - 1 - j];
      rotatedMatrix[size - 1 - i][size - 1 - j] =
        rotatedMatrix[j][size - 1 - i];
      rotatedMatrix[j][size - 1 - i] = temp;
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function partition(array, low, high) {
    const pivot = array[Math.floor((low + high) / 2)];
    let i = low;
    let j = high;
    const tempArr = array.slice();
    while (i <= j) {
      while (tempArr[i] < pivot) {
        i += 1;
      }
      while (tempArr[j] > pivot) {
        j -= 1;
      }
      if (i <= j) {
        const temp = tempArr[i];
        tempArr[i] = tempArr[j];
        tempArr[j] = temp;
        i += 1;
        j -= 1;
      }
    }
    return i;
  }
  function quickSort(array, low, high) {
    if (high > low) {
      const index = partition(array, low, high);
      quickSort(array, low, index - 1);
      quickSort(array, index, high);
    }
  }
  quickSort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let modifiedStr = str;
  for (let i = 0; i < iterations; i += 1) {
    const { length } = modifiedStr;
    const mid = Math.ceil(length / 2);
    const evenChars = modifiedStr.substring(0, mid);
    const oddChars = modifiedStr.substring(mid);

    let result = '';
    for (let j = 0; j < mid; j += 1) {
      result += evenChars[j];
      if (j < oddChars.length) {
        result += oddChars[j];
      }
    }
    modifiedStr = result;
  }
  return modifiedStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  let pivotIndex = digits.length - 2;
  while (pivotIndex >= 0 && digits[pivotIndex] >= digits[pivotIndex + 1]) {
    pivotIndex -= 1;
  }
  if (pivotIndex === -1) {
    return number;
  }
  let swapIndex = digits.length - 1;
  while (digits[swapIndex] <= digits[pivotIndex]) {
    swapIndex -= 1;
  }
  const tempDigit = digits[pivotIndex];
  digits[pivotIndex] = digits[swapIndex];
  digits[swapIndex] = tempDigit;

  const rightPart = digits.splice(pivotIndex + 1);
  rightPart.sort((a, b) => a - b);
  const result = parseInt(digits.concat(rightPart).join(''), 10);
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
