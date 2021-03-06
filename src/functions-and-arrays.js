// Iteration #1: Find the maximum

const maxOfTwoNumbers = (a,b) => {return a >= b ? a : b ;}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (array) => {
  let res = array[0] ;
  array.forEach(word => {res = word.length > res.length ? word : res ;})
  return res ? res : null ;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const sumNumbers = (array) => { 
  return array.length !== 0 ? array.reduce((acc, curr) => acc + curr, 0) : 0 ;
}

const sum = (array) => {
  res = array.length !== 0 ? array.reduce(
    (acc, curr) => {return (typeof curr) === "number" || (typeof curr) === "boolean" ? acc + curr : (typeof curr) === "string" ? acc + curr.length : undefined ; 
  }, 0) : 0 ;

  if (isNaN(res)) {
    throw new Error("Unsupported data type sir or ma'am")
  }
  return res ;
}


// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
const averageNumbers = (array) => {
  return array.length !== 0 ? 1/array.length * sum(array) : null ;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
const averageWordLength = averageNumbers ;
  // same function as averageNumbers which is using sum which manage string cases

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
const avg = (array) => {
  // 
  return array.length !== 0 ? Math.round(averageNumbers(array)*100,4)/100 : null;
} ;


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const uniquifyArray = (array) => {
  let res = [] ;
  array.forEach((word, k) => {
    if (array.indexOf(word) === k) {
      res.push(word)
    }
  })

  return array.length !== 0 ? res : null;

}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const doesWordExist = (array, toSearch) => {
  let res = false ;
  let counter = 0
  while (!res && counter < array.length) {
    res = array[counter] === toSearch ;
    counter ++
  }

  return array.length != 0 ? res : null ;
}


// Iteration #7: Count repetition
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

const howManyTimes  = (array, toSearch) => {
  let counter = 0
  array.forEach(word => {if (word === toSearch) counter++})

  return array.length != 0 ? counter : 0 ;
}


// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

const greatestProductOneRow = (matrix, row) => {
  let res = matrix[row][0] * matrix[row][1] * matrix[row][2] * matrix[row][3] ;
  let test = res;

  for (let k = 1 ; k < matrix[row].length-3 ; k++) {
    test = matrix[row][k]*matrix[row][k+1]*matrix[row][k+2]*matrix[row][k+3] ;
    res =  test > res ? test : res ;
  }
  return res ;
}

const greatestProductOneColumn = (matrix, column) => {
  let res = matrix[0][column] * matrix[1][column] * matrix[2][column] * matrix[3][column] ;
  let test = res ;

  for (let k = 1 ; k < matrix.length-3 ; k++) {
    test = matrix[k][column]*matrix[k+1][column]*matrix[k+2][column]*matrix[k+3][column] ;
    res =  test > res ? test : res ;
  }
  return res ;
}

const greatestProduct = (matrix) => {
  let nbRow = matrix.length ;
  let nbCol = matrix[0].length ;

  let res = 0 ;
  let test ;
  for (let k = 0; k < nbRow ; k++) {
    test = greatestProductOneRow(matrix, k) ;
    res = test > res ? test : res ;
  }

  for (let k = 0; k < nbCol ; k++) {
    test = greatestProductOneColumn(matrix, k) ;
    res = test > res ? test : res ;
  }

  return res ;
}

//Bonus - Iteration #8.1: Product of diagonals
const greatestProductOfDiagonals = (matrix) => {
  let res = matrix[0][0] * matrix[1][1] * matrix[2][2] * matrix[3][3] ;
  let test = res ;

  for (let k = 1 ; k < matrix.length-3 ; k++) {
    test = matrix[k][k]*matrix[k+1][k+1]*matrix[k+2][k+2]*matrix[k+3][k+3] ;
    res =  test > res ? test : res ;
  }
  for (let k = 0 ; k < matrix.length-3 ; k++) {
    test = matrix[matrix.length-1-k][k]*matrix[matrix.length-2-k][k+1]*matrix[matrix.length-3-k][k+2]*matrix[matrix.length-4-k][k+3] ;
    res =  test > res ? test : res ;
  }
  return res ;
}
