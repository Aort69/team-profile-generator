const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require ('fs')
const path = require ('path')
const inquirer = require("inquirer");
const output = path.resolve(__dirname, 'output')
const outputPath = path.join(output, 'index.html')

const teamMember = [];
const id = [];

function menu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "fullName",
          message: "What is your full name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is your Employee ID number",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is your office number?",
        },
      ])
      .then((answers) => {
          console.log(answers)
        const manager = new Manager(
          answers.fullName,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        teamMember.push(manager);
        id.push(answers.id);
        createNewMember();
      });
    }
    function createNewMember() {
      inquirer
        .prompt([
          {
            type: "list",
            name: "memberChoice",
            message: "Do you want to add another team member?",
            choices: [
              "Engineer",
              "Intern",
              "I do not want to add anymore members.",
            ],
          },
        ])
        .then((answers) => {
            console.log(answers)
          if (answers.memberChoice === "Engineer") {
            addEngineer();
          } else if (answers.memberChoice === "Intern") {
            addIntern();
          } else {
            buildTeam();
          }
        });
    }
    function addEngineer() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "fullName",
            message: "What is your full name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your Employee ID number",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "input",
            name: "github",
            message: "What is your github user name?",
          },
        ])
        .then((answers) => {
          const engineer = new Engineer(
            answers.fullName,
            answers.id,
            answers.email,
            answers.github
          );
          teamMember.push(engineer);
          id.push(answers.id);
          createNewMember();
        });
    }
    function addIntern() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "fullName",
            message: "What is your full name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your Employee ID number",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "input",
            name: "school",
            message: "What school did you go to?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.fullName,
            answers.id,
            answers.email,
            answers.school
          );
          teamMember.push(intern);
          id.push(answers.id);
          createNewMember();
        });
    }
    function buildTeam(){
        fs.writeFileSync(outputPath, render(teamMember), 'utf-8')
    }

    createManager();

  }


menu();
