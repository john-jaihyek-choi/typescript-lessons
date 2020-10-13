class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeesInformation(this: Department) {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accountingDept = new Department("d1", "Accounting");

accountingDept.addEmployee('Max');
accountingDept.addEmployee('John');
accountingDept.printEmployeesInformation();

console.log(accountingDept.describe());