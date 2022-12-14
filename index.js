const inquirer = require("inquirer");
const db = require("./db/connection")
// db.connect(function(err){
//     if (err) throw err
// })
const doNext = () => {
    inquirer
        .prompt([

            {
                type: 'list',
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add a employee"],
                name: "donext"
            }
        ])
        .then((response) => {
            console.log({ response });
            if (response.donext === "View all departments") {
                db.query(`select * from department`, (err, res) => {
                    if (err) console.log(err)
                    console.table(res)
                })
                doNext()
            }
            else if (response.donext === "View all roles") {
                db.query(`select * from role`, (err, res) => {
                    if (err) console.log(err)
                    console.table(res)
                })
                doNext()
            }
            else if (response.donext === "View all employees") {
                db.query(`select * from employee`, (err, res) => {
                    if (err) console.log(err)
                    console.table(res)
                })
                doNext()
            }
            else if (response.donext === "Add a department") {
                inquirer.prompt({
                    type: 'input',
                    message: "What is the name of the department you would like to add?",
                    name: "name"
                }).then(department => {
                    db.query(`insert into department (name) values ("${department.name}")`, (err, res) => {
                        if (err) console.log(err)
                        console.table(res)
                    })
                    doNext()
                })
            }

            else if (response.donext === "Add a role") {
                inquirer.prompt([{
                    type: 'input',
                    message: "What is the role you would like to add?",
                    name: "title"
                },
                {
                    type: 'input',
                    message: "What is the salary for this position?",
                    name: "salary"
                },
                {
                    type: 'input',
                    message: "What is department id does this role belong to?",
                    name: "dept_id"
                }
                ]).then(role => {
                    db.query(`insert into role (title, salary, department_id) values ("${role.title}", ${role.salary}, ${role.dept_id})`, (err, res) => {
                        if (err) console.log(err)
                        console.table(res)
                    })
                    doNext()
                })
            }
            else if (response.donext === "Add a employee") {
                inquirer.prompt([{
                    type: 'input',
                    message: "What is the first name of the employee you would like to add?",
                    name: "firstname"
                },
                {
                    type: 'input',
                    message: "What is the last name of the employee you would like to add?",
                    name: "lastname"
                },
                {
                    type: 'input',
                    message: "What role does this employee belong to?",
                    name: "role_id"
                },
                {
                    type: 'input',
                    message: "What manager id does this employe belong to?",
                    name: "manager_id"
                }
                ]).then(employee => {
                    db.query(`insert into employee (first_name, last_name, role_id, manager_id) values ("${employee.firstname}", "${employee.lastname}", ${employee.role_id}, ${employee.manager_id})`, (err, res) => {
                        if (err) console.log(err)
                        console.table(res)
                    })
                    doNext()
                })
            }
        });
}
doNext()

