const { Module } = require('module');
const Employee = require('./Employee.js')


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email) 
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole() {
        return 'Intern';
    }
}

// const employee1 = new Engineer("Jerry", 1, "fake@fakegmail.com", '@Aort69');
// console.log(employee1)
module.exports = Intern