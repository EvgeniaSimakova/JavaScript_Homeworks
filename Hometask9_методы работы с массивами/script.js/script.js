// Task 1 Переписать задачу с использованием перебирающего метода массивов

var numbers = [-1, 0, 2, 34, -2];

var positiveNumbers = numbers.filter(function(el) {
    return el > 0;
});

console.log(positiveNumbers);

// Task 2 Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

var numbersArr = [-8, -25, 3, -8, 5, 10, -89];

var findNum = numbersArr.find(function(number) {
    return number > 0;
});

console.log(findNum); 

// Task 3 палиндромом

function isPalindrome(word) {
    
    var wordReverse = word.toLowerCase().split('').reverse().join(''); 

    if (wordReverse === word) {
      return true;
    } else {
      return false;
    }
  }

  console.log(isPalindrome('шалаш'));
  console.log(isPalindrome('привет'));

  // Task 4 анаграммы

    function areAnagrams(word1, word2) {

    if (word1.toLowerCase().split('').sort().join('') === word2.toLowerCase().split('').sort().join('')) {
        return true;
    } else {
        return false;
        }
    }

    console.log(areAnagrams('днесь', 'снедь'));
    console.log(areAnagrams('привет', 'пока'));

    // Task 5 Написать функцию, которая будет разбивать массив на под-массивы определенной длины.

    function divideArr(array, arraySize) {
        var newArray = [];

        for (var i = 0; i < array.length; i += arraySize) {
            newArray.push(array.slice(i, i + arraySize));
        } return newArray;
    }

    divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);

