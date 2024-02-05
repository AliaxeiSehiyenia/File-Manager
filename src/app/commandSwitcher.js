import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';
import add from './add.js';
import rn from './rn.js';
import copy from './copy.js';
import mv from './mv.js';
import rm from './rm.js';
import osEOL from './osEOL.js';
import cpus from './cpus.js';
import homedir from './homedir.js';
import username from './username.js';
import architecture from './architecture.js';

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
            args.length === 2 ? await mv(args[0], args[1]) : console.log('Invalid command');
            break;
        case 'rm':
            args.length === 1 ? await rm(args[0]) : console.log('Invalid command');
            break;
        case 'os':
            switch (args[0]) {
                case '--EOL':
                    osEOL();
                    break;
                case '--cpus':
                    cpus();
                    break;
                case '--homedir':
                    homedir();
                    break;
                case '--username':
                    username();
                    break;
                case '--architecture':
                    architecture()
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