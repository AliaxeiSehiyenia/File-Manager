import readline from 'readline';
import {
    stdin as input,
    stdout as output,
} from 'node:process';
import greeting from './greeting.js';
import currentDirectory from './currentDirectory.js';
import commandSwitcher from './commandSwitcher.js';

const {argv} = process;
let userName = '';
argv.forEach((arg) => {
    if (arg.startsWith('--username=')) {
        userName = `${arg.slice(11)}`;
    }
});

const MESSAGE_EXIT = `Thank you for using File Manager, ${userName || 'Username'}, goodbye!`;

const app = async () => {
    const rl = readline.createInterface({input, output});

    await greeting(userName);
    currentDirectory();

    rl.on('line', (input) => {
        const command = input.trim();
        command === '.exit' ? rl.close() : commandSwitcher(command);
        currentDirectory();
        rl.prompt();
    });

    rl.on('close', () => {
        console.log(MESSAGE_EXIT);
        process.exit(0);
    });
};

export default app;