const foodArray = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];


const [first,second,...others]=foodArray;

console.log(first)
console.log(second)
console.log(others)


const test = [ "Pasta", "Salad"];

let [main,secondary]=test;
console.log(main,secondary)

[main,secondary]=[secondary,main]

console.log(main,secondary)