// Functions

const concatStrings = (a: string, b: string): string => {
  // This function get 2 variables that both are string
  // It returns always string

  return a + b;
};

const plusNumber = (a: number, b: number): number => {
  // This function get 2 variables that both are number
  // It returns always number

  return a + b;
};

const nameAge = (name: string, age: number): string => {
  // This function get a name as string and age as number
  // It returns a hi string

  return `${name} has ${age} years old!`;
};

console.log(concatStrings("Hello ", "Amir"));
console.log(plusNumber(2, 22));
console.log(nameAge("Amirhossein", 24));
