//Import inquirer
const inquirer = require('inquirer');
//Imort Console Table
const cTable = require('console.table');
// Connection to database
const connection = require('./connection.js')

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id' + connection.threadId);
    afterConnection();
});

//Welcome screen after connection
afterConnection = () => {
    console.log("***********************************")
    console.log("                                   ")
    console.log("         EMPLOYEE TRACKER          ")
    console.log("         by: Robert Arnold         ")
    console.log("                                   ")
    console.log("***********************************")
    promptUser();
}    

//Inquirer prompt for starting
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Update an employee manager',
                'View employees by department',
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View dearment budgets',
                'No Action'
            ]
        }
    ])

    .then((answers) => {
        const { choices } = answers;
        
        if (choices === 'View all departments'){
            showDepartments();
        };
    
        if (choices === 'View all roles'){
            showRoles();
        };
    
        if (choices === 'View all employees'){
            showEmployees();
        };
    
        if (choices === 'Add a department'){
            addDepartment();
        };
    
        if (choices === 'Add a role'){
            addRole();
        };
    
        if (choices === 'Add an employee'){
            addEmployee();
        };
    
        if (choices === 'Update an employee role'){
            updateEmployee();
        };
    
        if (choices === 'Update an employee manager'){
            updateManager();
        };
    
        if (choices === 'View employees by department'){
            employeeDepartment();
        };
    
        if (choices === 'Delete a department'){
            deleteDepartment();
        };
    
        if (choices === 'Delete a role'){
            deleteRole();
        };
    
        if (choices === 'Delete an employee'){
            deleteEmployee();
        };
    
        if (choices === 'View department budgets'){
            viewBudget();
        };
    
        if (choices === 'No action'){
            connection.end();
        };
    });
};

//Show departments function
showDepartments = () => {
    console.log('Showing all departments...\n');
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;

    connection.promise().query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        promptUser();
    })
}

//Add department function
addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDept',
            message: 'What department do you want to add?',
            validate: addDept => {
                if (addDept) {
                    return true;
                } else {
                    console.log('Please enter a department');
                    return false;
                }
            }
        }
    ])
    .then((answer) => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        connection.query(sql, answer.addDept, (err, result ) => {
            if (err) throw err;
            console.log ('Added' + answer.addDept + 'to departments!');

            showDepartments();
        });
    });
};
