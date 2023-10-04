// const add = (a, b) => a + b;
// const printOutput = output => console.log(output);
// const button = document.querySelector('button');
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
// printOutput(add(5, 2));

const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
    name:'Max',
    age:30
};

const copiedPerson = {...person};

console.log(copiedPerson);

const add = (...numbers:[number,number,number])=> numbers.reduce((curResult,curValue)=>curResult+curValue,0);
const addedNumbers = add(5,10,2,3.7);
console.log(addedNumbers);
