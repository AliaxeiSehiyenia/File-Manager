import * as path from 'path';
import {chdir, cwd} from 'node:process';

const up = () => {
    try {
        const currentDirectory = cwd();
        const parentDirectory = path.resolve(currentDirectory, '..');
        const rootDirectory = path.parse(parentDirectory).root;

        currentDirectory !== rootDirectory ? chdir(parentDirectory) : null;
    } catch {
        console.error('Operation failed');
    }
};

export default up;