// const = a variable that can not be changed

// declare the variables first
const PI = 3.14159; // PI has the global general value is 3.14159 it must be not change this value during the code start and end
let radius;
let circumference;

// get the input from the prompt
radius = window.prompt("What is the radius of the circle ? ");

//  user input variable type conversion to the inter type
radius = Number(radius);

// PI = 5;  // in this line not working using type const for PI


// calculation for find the circumference
circumference = 2 * PI * radius;

// display the circumference using console
console.log("Circumference is : ", circumference);