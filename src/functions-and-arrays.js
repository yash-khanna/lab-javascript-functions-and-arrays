// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }

}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findScaryWord(words) {
  if (words.length == 0) {
    return null;
  }
  let word = [];
  for (let i = 0; i < words.length; i++) {
    word[i] = words[i].length;
  }
  let max = word[0];
  let index = 0;
  for (let i = 1; i < word.length; i++) {
    if (max < word[i]) {
      max = word[i];
      index = i;
    }
  }
  return words[index];
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function add(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    let b = a[i];
    if (typeof (b) == "object") {
      throw console.error("Unsupported data type sir or ma'am");

    }
    if (typeof (b) == "string") {
      sum += b.length;
    } else {
      sum += a[i]; //sum += a[i].length;
    }
  }
  return sum;
}


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg) {
  let sum = 0;
  if (numbersAvg.length == 0) {
    return null;
  }
  for (let i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / numbersAvg.length;
}


// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  let max = 0;
  if (wordsArr.length == 0) {
    return null;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    let a = wordsArr[i];
    max += a.length;
  }
  return max / wordsArr.length;
}

function avg(arr) {
  let sum = 0;
  if (arr.length == 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    let b = arr[i];
    if (typeof (b) == "object") {
      throw console.error("Error");

    }
    if (typeof (b) == "string") {
      sum += b.length;
    } else {
      sum += arr[i]; //sum += a[i].length;
    }
  }
  sum = sum / arr.length;
  let sum1 = sum.toFixed(2);
  let sum2 = parseFloat(sum1);
  return sum2;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    //         console.log('New veggies collection is : ' + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    //         console.log(veggie + ' already exists in the veggies collection.');
  }
  return veggies;
}

function uniqueArray(wordsFind) {
  if (wordsFind.length == 0) {
    return null;
  }
  items = [];
  for (let i = 0; i < wordsFind.length; i++) {
    items = updateVegetablesCollection(items, wordsFind[i]);
  }
  return items;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];



uniqueArray(wordsFind);

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function searchElement(wordsCount, word) {
  if (wordsCount.length == 0 || word.length == 0) {
    return null;
  }
  if (wordsCount.indexOf(word) === -1) {
    return false;
  } else {
    return true;
  }
}

function howManyTimesElementRepeated(wordsCount, word) {
  let counter = 0;
  if (wordsCount.length == 0 || word.length == 0) {
    return 0;
  }
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount.indexOf(word) != -1) {
      wordsCount[wordsCount.indexOf(word)] = "";
      counter++;
    }
  }
  return counter;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function maximumProduct(matrix) {
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    prod = matrix[i][0] * matrix[i][1] * matrix[i][2] ** matrix[i][3] * matrix[i][4] * matrix[i][5] * matrix[i][6] * matrix[i][7] * matrix[i][8] ** matrix[i][9];
    if (prod > max) {
      max = prod;
    }
  }

  for (let j = 0; j < matrix.length; j++) {
    prod = matrix[0][j] * matrix[1][j] * matrix[2][j] * matrix[3][j] * matrix[4][j] * matrix[5][j] * matrix[6][j] * matrix[7][j] * matrix[8][j] * matrix[9][i];
    if (prod > max) {
      max = prod;
    }
  }
  return max;
}