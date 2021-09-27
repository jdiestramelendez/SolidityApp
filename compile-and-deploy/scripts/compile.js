const path = require('path');
const fs = require('fs');
const solc = require("solc");
const chalk = require('chalk');

const contractPath = path.resolve(__dirname, "../contracts", "UsersContract.sol");
console.log(contractPath, 'hhhhhhh');
const source = fs.readFileSync(contractPath, 'utf8');
console.log(source, 'ouenvuewnvoewunvuewnvuienvuienviu');
console.log(solc.compile(source, 1).contracts[":UsersContract.sol"] , 'acaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
console.log(JSON.parse(solc.compile(JSON.stringify((source, 1).contracts[":UsersContract.sol"]))), 'iiiiiiiiiiiiiii');
const { interface, bytecode } = solc.compile(source, 1).contracts[":UsersContract.sol"]

console.log(chalk.green(bytecode));
console.log(chalk.cyan(interface));