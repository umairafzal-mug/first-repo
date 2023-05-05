// temp storage where we can store and retrieve our data.

// we have  3 methods to Declare or Initialize Variable

var name = "Ayeza";



//  a function is a piece of code used for making code reuseable
function getName() {
    // "return" will going to return a value
    return name;
}


// "Find" a "maximum number" from "given 3 values"

var num1 = 1, num2 = 10, num3 = 12;


if (num1 > num2 && num1 > num3) {
    console.log("Given Number one is maximum");
} else if (num2 > num1 && num2 > num3) {
    console.log("Given Number Two is maximum");
} else if (num3 > num1 && num3 > num2) {
    console.log("Given Number Three is maximum");
} else {
    console.log("All of them are equal")
}





// there three ways to check the conditions
// if statement
// Turnery Operator
// switch Case

// Turnary Operator
function ageCheck(age = -1) {
    return age > 0 && age < 18 ? "Child" : "Adult"
}


const response = ageCheck()
console.log("You're a/an ", response);



// a =1 ,a++/++a = a=a+1  a=2
const arr = [1, 2, 4, 6, 1]

// arr.pop()
for (let i = 0; i < arr.length; i++) {
    console.log("Ayeza Please focus on studies", arr[i]);
}

console.log("Loop ends here");