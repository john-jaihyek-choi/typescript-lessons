abstract class Department {
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(employeeName: string) {
        return {
            name: employeeName
        }
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesInformation(this: Department) {
        console.log({
            numberOfEmployees: this.employees.length,
            employees: this.employees
        });
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admin: string[]) {
        super(id, 'IT');
    }

    describe() {
        console.log(`(${this.id}): IT`)
    }

    addAdmin(name: string) {
        this.employees.push(name);
        this.admin.push(name);
    }
}

class AccountingDepartment extends Department {
    private lastReport: number;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: number[]) {
        super(id, 'Accounting');
        this.lastReport = reports[this.reports.length-1] || reports[0];
    }

    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;
        throw new Error('No Reports Found...');
    }

    set mostRecentReport(report: number) {
        this.addReport(report);
        this.lastReport = report;
    }

    describe() {
        console.log(`(${this.id}): Accounting`)
    }

    addEmployee(name: string) {
        if(name === 'Jason') return;
        this.employees.push(name);
    }

    addReport(report: number) {
        this.reports.push(report);
        this.lastReport = this.reports[this.reports.length-1];
    }

    viewReports(this: AccountingDepartment) {
        console.log(this.reports);
    }
}

const it = new ITDepartment('d1', ['John']);
// const accounting = new AccountingDepartment('d2', [12]);
// instead:
const accounting = AccountingDepartment.getInstance();
const accountingTest = AccountingDepartment.getInstance();

console.log(accounting, accountingTest);

it.addEmployee('Max');
it.addEmployee('John');
it.addAdmin('James');

accounting.addReport(1);
accounting.addReport(4);
accounting.addEmployee('June');
accounting.viewReports()

accounting.addEmployee('Jason');
accounting.addEmployee('Eric');
accounting.printEmployeesInformation();

console.log(it.describe());
console.log(accounting.describe());

console.log(it);
console.log(accounting);

console.log(accounting.mostRecentReport);

accounting.mostRecentReport = 7;
console.log(accounting.mostRecentReport);

console.log(Department.fiscalYear)
console.log(Department.createEmployee('Luke'));

console.log(accounting.describe());
console.log(it.describe());
