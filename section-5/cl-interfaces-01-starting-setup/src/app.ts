// Code goes here!
class Department{
    public name:string;
    // public employees:string[] = [];
    private employees:string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    describe(this:Department){
        console.log('Department: '+ this.name);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

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
