// Variables

let name: string = "Amirhossein"; // var company is always string
let age: number = 24; // var age is always number
let isMale: boolean = true; // var isPublished is always boolean

let odds: number[] = [1, 3, 5, 7, 9]; // Array of numbers
let evens: number[] = [2, 4, 6, 8]; // Array of numbers
let friends: string[] = ["Reza", "Sina", "Kasra"]; // Array of strings

let x: any = "Amirhossein"; // This var can be anything
let xArr: any[] = ["Amir", 24, true, null, [], {}]; // This array can have anything

// Functions

const concatStrings = (a: string, b: string) => {
  return a + b;
};

const plusNumber = (a: number, b: number) => {
  return a + b;
};

console.log(concatStrings("Hello ", "Amir"));
console.log(plusNumber(2, 22));
