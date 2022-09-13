// Arrays

// Creation - 5 ways
const numbers = [1, 2, 3, 4, 5];
const weeks = new Array(); 
const days = Array();
const persons = new Array(4);
const digits = new Array(0,5);

const heroes = Array.of();
const heroes2 = Array.of("hero 1", "hero 2", "hero 3");

const letters = Array.from("hello");

console.log(numbers);
console.log(weeks, weeks.length);
console.log(days);
console.log(persons, persons.length);
console.log(digits);
console.log(heroes,heroes.length)
console.log(heroes2,heroes2.length)
console.log(letters);

// Insertion
const names=["vibhu","sharma","vaibhav"]
console.log(names[0]);
console.log(names[names.length-1]);

console.log(names.unshift("hero"));
console.log(names);
console.log(names.push("romil"));
console.log(names);
console.log(names.splice(1,0,"sarthak"));
console.log(names)

// Deletion
console.log(names.pop())
console.log(names)
console.log(names.shift())
console.log(names)
console.log(names.splice(1,1))
console.log(names)

// Traversing
for(let name of names){
    console.log(name)
}

// updation
names[0] = 'Rohit'
console.log(names);

// searching
console.log(names[1]);
console.log(names.indexOf("vaibhav"));


