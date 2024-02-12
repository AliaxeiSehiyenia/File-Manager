import fs from 'fs';
import {stdout} from 'node:process';

const cat = async (filePath) => {
    try {
        const readStream = fs.createReadStream(filePath, {encoding: 'utf-8'});

        await readStream.pipe(stdout);
        readStream.on('error', () => {
            console.log('Operation failed');
        });
    } catch {
        console.log('Operation failed');
    }
};

export default cat;