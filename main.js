// Part:1 Thinking Functionally

// 1.
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Example
console.log(sumArray([1, 2, 3, 4, 5])); 


// 2.
function averageArray(numbers) {
    return numbers.length == 0 ? 0 : sumArray(numbers) / numbers.length;
}
// Example
console.log(averageArray([1, 2, 3, 4, 5]));


// 3.
function longestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
// Example
console.log(longestString(["say", "hello", "in", "the", "morning"]));


// 4.
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}
// Example
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));


// 5.
function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1);
        console.log(n);
    }
}
printNumbers(5);



// Part:2 Thinking Methodically 

// 1.
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// 2.
people.sort((a, b) => a.age - b.age);
console.log(people);

// 3.
const filteredPeople = people.filter(person => (person.age) <= 50);
console.log(filteredPeople);

// 4.
const updatedPeople = people.map(person => ({
    ...person,
    job: person.occupation,
    age: person.age + 1,
}));
console.log(updatedPeople);


// 5.
const totalAge = people.reduce((acc, person) => acc + person.age, 0);
const averageAge = totalAge / people.length;
console.log("Total Age:", totalAge);
console.log("Average Age:", averageAge);


// Part 3: Thinking Critically

// 1.
function incrementAge(person) {
    if (!person.age) person.age = 0;
    person.age += 1;
    person.updated_at = new Date();
    return person;
}

console.log(incrementAge({ name: "Bruce" })); 


// 2.
function incrementAgeCopy(person) {
    const copy = { ...person };
    if (!copy.age) copy.age = 0;
    copy.age += 1;
    copy.updated_at = new Date();
    return copy;
}

const original = { name: "Bruce", age: 41 };
const copy = incrementAgeCopy(original);
console.log(copy); 
console.log(original); 