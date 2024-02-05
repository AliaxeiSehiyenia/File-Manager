const commandSwitcher = (command) => {
    const [operation, ...args] = command.split(' ');
    switch (operation) {
        case 'up':
            console.log('up');
            break;
        case 'cd':
            console.log('cd');
            break;
        case 'ls':
            console.log('ls');
            break;
        case 'cat':
            console.log('cat');
            break;
        case 'add':
            console.log('add');
            break;
        case 'rn':
            console.log('rn');
            break;
        case 'cp':
            console.log('cp');
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