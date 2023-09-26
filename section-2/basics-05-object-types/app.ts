function add(n1: number, n2: number): number { //결과값을 추론할 수 있음
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result:' + num);
}

// printResult(add(3, 5));
let combineValues: (a: number, b: number) => number;
combineValues = add;
// console.log(combineValues(4, 5));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void):void {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (num) => {
    console.log(num);
});