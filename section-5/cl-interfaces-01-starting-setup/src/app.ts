interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }
    greet(phrase:string){
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;
user1 = new Person('Max') // Person이 Greetable의 인터페이스 구현체이기 때문에 가능함
user1.greet('Hi there - I am');
