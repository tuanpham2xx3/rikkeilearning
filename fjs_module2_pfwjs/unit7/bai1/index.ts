class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
  public printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Salary: ${this.salary}`);
  }
}

const employee = new Employee("Nguyen Van A", 10000000);

employee.printInfo();
console.log(employee.name);
console.log(employee.getSalary());
