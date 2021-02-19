const { Module } = require('module');
const Employee = require('./Employee.js')


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email) 
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole() {
        return 'Engineer';
    }
}

// const employee1 = new Engineer("Jerry", 1, "fake@fakegmail.com", '@Aort69');
// console.log(employee1)
module.exports = Engineer