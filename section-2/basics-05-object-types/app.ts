function add(n1:number,n2:number):number{ //결과값을 추론할 수 있음
    return n1 + n2;
}
function printResult(num:number):void{
    console.log('Result:'+num);
}
printResult(add(3,5));

let combineValues:(a:number,b:number) => number;
combineValues = add;
combineValues = printResult; //일부러 에러낸거
console.log(combineValues(4,5));