//Import MySQL
const mysql = require('mysql2');
//Import inquirer
const inquirer = require('inquirer');
//Imort Console Table
const cTable = require('console.table');
//Setup dotenv
require('dotenv').config()

// connection to database
const connection = require('connection.js')

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
    console.log("        by: Robert Arnold          ")
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
                'Update an employee role',
                'Update an employee manager',
                'View employees by deartment',
                'Delete a department',
                'Delete a role',
                'Delete an employee',
                'View dearment budgets',
                'No Action'
            ]
        }
    ])
}