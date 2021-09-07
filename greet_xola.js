const greet = require('./greet');
const chalk=require('chalk');
const figlet=require('figlet');

const styledMessage=chalk.bgYellow.red(greet('Xola'));
figlet(styledMessage, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
})