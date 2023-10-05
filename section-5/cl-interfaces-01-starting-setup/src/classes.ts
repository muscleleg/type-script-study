// Code goes here!
abstract class Department {
    static fiscalYear = 2020;
    // private id:string;
    // private name:string;
    // public employees:string[] = [];
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        console.log(Department.fiscalYear); //o
        // console.log(this.fiscalYear) //x
    }

    static createEmployee(name:string){
        return{name:name};
    }

    abstract describe(this: Department):void ;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }

}

class AccountingDepartment extends Department {
    private lastReports: string;
    private static instance:AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReports) {
            return this.lastReports;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReports = reports[0];
    }

    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2',[]);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReports = text;
    }

    printReports() {
        console.log(this.reports);
    }

}

// const accounting = new Department('d1','Accounting');
// const itDepartment = new ITDepartment('d1',['Accounting']);
//
// itDepartment.addEmployee('Max');
// itDepartment.addEmployee('Manu');
// itDepartment.printEmployeeInformation();
// itDepartment.describe();
const employee1 = Department.createEmployee('Max');
console.log(employee1,Department.fiscalYear);

const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting1,accounting2);

// accounting.mostRecentReport = '';
accounting.addReport('something went wrong');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
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
