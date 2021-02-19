class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}


module.exports = Employee
// const employee1 = new Employee("Jerry", 1, "fake@fakegmail.com");
// console.log(employee1.getName());

// const employee2 = new Employee("greg", 2, "alsofakemail@.com");
// console.log(employee2.getName());
