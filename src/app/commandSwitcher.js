import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';
import add from './add.js';
import rn from './rn.js';
import copy from './copy.js';

const commandSwitcher = async (command) => {
    const [operation, ...args] = command.split(' ');
    switch (operation) {
        case 'up':
            await up();
            break;
        case 'cd':
            args.length === 1 ? await cd(args[0]) : console.log('Invalid command');
            break;
        case 'ls':
            await ls();
            break;
        case 'cat':
            args.length === 1 ? await cat(args[0]) : console.log('Invalid command');
            break;
        case 'add':
            args.length === 1 ? await add(args[0]) : console.log('Invalid command');
            break;
        case 'rn':
            args.length === 2 ? await rn(args[0], args[1]) : console.log('Invalid command');
            break;
        case 'cp':
            args.length === 2 ? await copy(args[0], args[1]) : console.log('Invalid command');
            break;
        case 'mv':
            console.log('mv');
            break;
        case 'rm':
            console.log('rm');
            break;
        case 'os':
            switch (args[0]) {
                case '--EOL':
                    console.log('--EOL');
                    break;
                case '--cpus':
                    console.log('--cpus');
                    break;
                case '--homedir':
                    console.log('--homedir');
                    break;
                case '--username':
                    console.log('--username');
                    break;
                case '--architecture':
                    console.log('--architecture');
                    break;
                default:
                    console.log('Invalid command');
            }
            break;
        case 'hash':
            console.log('hash');
            break;
        case 'compress':
            console.log('compress');
            break;
        case 'decompress':
            console.log('decompress');
            break;
        default:
            console.log('Invalid command');
    }
};

export default commandSwitcher;