// Code goes here!
class Department {
    // private id:string;
    // private name:string;
    // public employees:string[] = [];
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}`);
    }

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

    // describe() {
    //     super.describe();
    //     console.log(`admins: ${this.admins}`)
    // }

}

class AccountingDepartment extends Department {
    private lastReports: string;

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

    constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReports = reports[0];
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

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = '';
accounting.addReport('something went wrong');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation();

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
