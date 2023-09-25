// const person: {
//   name: string;
//   age: number;
// } = {
const person :{
  name:string;
  age:number;
  hobbies:string[];
  role:[number,string];
}={
  name: 'maximilian',
  age : 30,
  hobbies:['sports','Cooking'],
  role:[2,'author']
};
let favoriteActivities: string[];
favoriteActivities = ['sports'];


console.log(person.name);
