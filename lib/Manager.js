const { Module } = require('module');
const Employee = require('./Employee.js')


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole() {
        return 'Manager';
    }
}

// const employee1 = new Manager("Jerry", 1, "fake@fakegmail.com", '@Aort69');
// console.log(employee1)
module.exports = Manager