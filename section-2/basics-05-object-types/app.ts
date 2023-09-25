// const person: {
//   name: string;
//   age: number;
// } = {
enum Role{ADMIN,READ_ONLY,AUTHOR};

const person = {
  name: 'maximilian',
  age : 30,
  role:Role.ADMIN
};
let test_array:any; // 이딴 식을 쓰지마삼 any는 꼭 필요할때만 사용하기
test_array = ['sports',3]
console.log(person.role);
console.log(Role[person.role]);
