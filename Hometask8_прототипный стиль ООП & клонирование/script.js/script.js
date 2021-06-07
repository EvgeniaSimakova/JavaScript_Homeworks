// Task 1 Classes in prototype style

function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);

    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;

// Task 2 Objects - deep clone

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepClone(itemToClone) {
    var newObjOrArr = Array.isArray(itemToClone) ? [] : {};

    for (var key in itemToClone) {
        var currentVal = itemToClone[key];

        newObjOrArr[key] = (typeof currentVal === 'object' && currentVal !== null) ? deepClone(currentVal) : currentVal;
    }

    return newObjOrArr;
}

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// Task 3 Objects and deep compare

var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function areEqual(a, b) {
    if (Object.keys(a).length === Object.keys(b).length) {
        for (var prop in a) {
            if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
                var currentAVal = a[prop],
                    currentBVal = b[prop];

                if (typeof currentAVal === 'object' && currentAVal !== null) {
                    if (!areEqual(currentAVal, currentBVal)) return false;
                } else if (typeof currentAVal === 'function') {
                    if (currentAVal.toString() !== currentBVal.toString()) return false;
                } else if (currentAVal !== currentBVal) return false;
            } else {
                return false;
            }
        } return true;
    } return false;
}

console.log(areEqual(a, b));