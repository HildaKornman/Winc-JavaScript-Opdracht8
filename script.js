//Opdracht 8
//Checking if a number is big
const checkAge = function (age){
    if(age>100){
        return ("true");
    } 
    return ("false");
};

const result = checkAge (150);
console.log (result); 
//Bouncer at a club
const checkEntrance = function (maxNumberInClub, currentNumberInClub, agePersonEntering){
    if (agePersonEntering<18){
        return ("this is a club for adults")
    }
    if (currentNumberInClub >= maxNumberInClub){
        return ("it's too busy now, come back later")
    } 
    return ("come in");
;}

const result2 = checkEntrance (100, 80, 19);
console.log (result2);
//This function produces values; it does not do something.
//Calculating the average
const calculateAverage = function (number1, number2, number3, number4, number5){
    const average = ((number1+number2+number3+number4+number5)/5);
    return average;
};
const result3 = calculateAverage (4,8,3,6,5);
console.log (Math.round(result3));  
//This function produces a value; it does not do something.