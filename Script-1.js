const ageCheck = function (age) {
    if (age >= 18)
        return true;
    else
        return false;
}
console.log(ageCheck(17))



const greetings = function (age) {
    if (ageCheck(age)) {
        return "Hello there";
    }
    else { return "Hey kiddo"; }
}

console.log(greetings(17))

//MIJN OPLOSSING..........................

// const greetings = function (agecheck) {
//     if (agecheck(age))
//         return "Hello there";
//     else if (agecheck = false)
//         return "Hey kiddo";
// }

// console.log(greetings(false))

//MIJN OPLOSSING..........................