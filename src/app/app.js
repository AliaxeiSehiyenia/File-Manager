import readline from 'readline';
import {
    stdin as input,
    stdout as output,
} from 'node:process';

const {argv} = process;
let userName = '';
argv.forEach((arg) => {
    if (arg.startsWith('--username=')) {
        userName = `${arg.slice(11)}`;
    }
});

const MESSAGE_EXIT = `Thank you for using File Manager, ${userName || 'Username'}, goodbye!`;

const greeting = async () => {
    if (!userName) {
        console.error('The username is not specified');
        console.log('Use "npm start -- --username=your_username"');
        console.log('or');
        console.log('Use ""npm start --username=your_username"');
        process.exit(1);
    } else if (typeof userName === 'string') {
        console.log(`Welcome to the File Manager, ${userName}!`);
    }
};

const app = async () => {
    const rl = readline.createInterface({input, output});

    await greeting();

    rl.on('line', async (input) => {
        const command = input.trim();
        command === '.exit' ? rl.close() : console.log(command);
        rl.prompt();
    });

    rl.on('close', () => {
        console.log(MESSAGE_EXIT);
        process.exit(0);
    });
};

export default app;