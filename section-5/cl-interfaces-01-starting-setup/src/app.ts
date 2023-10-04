// Code goes here!
class Department{
    // private id:string;
    // private name:string;
    // public employees:string[] = [];
    private employees:string[] = [];

    constructor(private id:string, private name: string) {
        // this.id = id;
        // this.name = n;
    }
    describe(this:Department){
        console.log(`Department(${this.id}): ${this.name}`);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1','Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();


accounting.describe();

// const accountingCopy :Department = {
//     name:'test',
//     employees:[],
//     describe: accounting.describe,
//     addEmployee:accounting.addEmployee,
//     printEmployeeInformation:accounting.printEmployeeInformation
// };
// accountingCopy.describe();
// accountingCopy.addEmployee("메소드 삽입테스트")
// accountingCopy.printEmployeeInformation();
