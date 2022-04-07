let numbers = [-21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22];

function getPositiveNumbersFromArray(arrayOfNumbers) {

    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error("Input type is not array!");
    }

    if (!arrayOfNumbers.length) {
        throw new Error("Input has no elements!");
    }

    if (arrayOfNumbers.some(element => typeof (element) !== 'number')) {
        throw new Error("Every item from the array must be a number!");
    }

    const fillteredArray = arrayOfNumbers.filter(number => number > 0);

    if(fillteredArray.length > 1){
        fillteredArray.sort((a, b) => a - b);
    }

    return fillteredArray;

    

}

const result = getPositiveNumbersFromArray(numbers);

console.log(result);