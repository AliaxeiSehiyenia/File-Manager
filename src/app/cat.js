import fs from 'fs';
import {stdout} from 'node:process';

const cat = (filePath) => {
    try {
        /^["']/.test(filePath) ? filePath = filePath.slice(1) : null;
        /["']$/.test(filePath) ? filePath = filePath.slice(0, -1) : null;

        const readStream = fs.createReadStream(filePath, {encoding: 'utf-8'});

        readStream.pipe(stdout);
        readStream.on('error', () => {
            console.log('Operation failed');
        });
    } catch {
        console.log('Operation failed');
    }
};

export default cat;