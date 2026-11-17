

class Student{
constructor(name, age){
    this.name = name;
    this.age = age;
}
displayInfo(){
    console.log("Name:", this.name);
    console.log("Age:", this.age);
}

}

const student1 = new Student("Rahul", 20);
student1.displayInfo();

const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 20000,
    isElectric: false,

    start: function(){
    return "Vroom! The engine is running.";
    }
};

console.log(car.model);
console.log(car.start());

Classed (Blueprints).

class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    startEngine(){
        return `The ${this.brand} ${this.model}is starting ...`;
    }
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.startEngine());

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Abdallah Mohammed Elmahady"));


function getRevers(srt){
    return srt.split('').reverse().join('');
}

console.log(getRevers("Mosa Abdallah"));
console.log(getRevers("Mosa"));


function arraySum(arr){
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(arraySum([1, 2, 3, 4, 5, 6, 7]));


// Reverse String.
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("Abdallah Mohammed "));


//cont the Number of vowels.
function countVowels(str){
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length :0;
}
console.log(countVowels("hello"));


//Check of a String Is a Palindrome.
function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));


//find the largest number.
function findLargest(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}
console.log(findLargest([2, 8, 1, 15, 6, 9]));


//Calcualte the Sum of an Array.
function sumArray(arr){
    return arr.reduce((sum, num) => sum + num, 0);
}
// console.log(sumArray([1, 2, 3, 4, 5,]));

//Remove Spaces from a String.
function removeSpaces(str){
    return str.replace(/\s+/g, "");
}
console.log(removeSpaces("Hello World . Abdallah"));

//Campitalize the first letter of Each Word.
function capitalizeWrods(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWrods("hello world"));

