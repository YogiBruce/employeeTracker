//Import MySQL
const mysql = require('mysql');
//Import inquirer
const inquirer = require('inquirer');
//Imort Console Table
const cTable = require('console.table');
//Setup dotenv
require('dotenv').config()

//Connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD
})