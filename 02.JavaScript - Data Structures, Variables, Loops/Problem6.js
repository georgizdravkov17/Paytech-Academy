const fibonaciNumbers = [0, 1];

while(true){
    const currentNumber = fibonaciNumbers[fibonaciNumbers.length - 1] + fibonaciNumbers[fibonaciNumbers.length - 2];
    
    if(currentNumber > 500){
        break;
    }

    fibonaciNumbers.push(currentNumber);
}

fibonaciNumbers.forEach(number => console.log(number));