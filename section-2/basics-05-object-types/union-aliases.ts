type Combinable = number | string;
type ConvsersionDescriptor = 'as-number'|'as-text';
function combine(
    input1:Combinable,
    input2:Combinable,
    resultConversion:ConvsersionDescriptor){
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultConversion ==='as-number'){
        result = +input1 + +input2;
    } else{
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineAges1 = combine(30,26,'as-number');
const combineAges2 = combine('30','26','as-number');
const combineNames = combine("Test","Value",'as-text')
console.log(combineAges1);
console.log(combineAges2);
console.log(combineNames);