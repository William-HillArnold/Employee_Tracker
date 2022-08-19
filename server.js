const inquirer = require('inquirer');
//const fs = require 'fs');
 const mysql = require('mysql');
 require('console.table');

 var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'company_db'
    });

    connection.connect(function(err) {
        if (err) throw err;
        promptUser();
    });


function promptUser() {
    return inquirer.prompt(
    { 
        type: 'list',
        choices: 
        [
          'View all departments',
          'View all roles',
          'View all employees',
          'Quit'
        ],
        
        message: 'What would you like to do? (Use arrow keys)',
        name: 'options',
    })

    .then(function(result) { 
        switch (result.options) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
                default:
                quit();
            }
});
}

    const init = () => {
        promptUser()

        };
        init();

        