// Task 1 Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}

var names = ['Vasya', 'John', 'Peter', 'David', 'Daniel'];

function changeNames(curr) {
    return '{name:' + curr +'}';
}

console.log(names.map(changeNames));

// Task 2 

var currentArr = ['00', '13', '24'];

function currentTime(arr) {
    var time = arr.reduce(function(result, currentElem) {
        return  result  + ' : ' + currentElem;
    });

    return 'Текущее время: ' + time;
}

console.log(currentTime(currentArr));

// Task 3 подсчет гласных в слове

var currentPhrase = 'Написать функцию';

function toFindVowels(str) { 
    var vowels = 'аеёиоуыэюя';

    return str.toLowerCase().split('').reduce(function(res, curr) {
        if (vowels.indexOf(curr) !== -1) {
            res += 1;
        }
        return res;
    }, 0);
}

console.log('Количество гласных: ' + toFindVowels(currentPhrase));

// Task 4   

function countSentencesLetters(text) {

    var theText = text.split(/[\.!\?]+/);

    if(theText[theText.length-1] === '') {
        theText.pop();
    }
    
    for (var key in theText)
    console.log(theText[key] + ': Letters quantity is: ' + theText[key].split(' ').join('').split(',').join('').length);
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));






