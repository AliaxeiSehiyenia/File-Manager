import * as fs from 'node:fs';
import {createHash} from 'crypto'

const hash = async (pathToFile) => {
    try {
        const stream = fs.createReadStream(pathToFile);
        const hash = createHash('sha256');

        return new Promise((resolve, reject) => {
            stream.on('data', (chunk) => hash.update(chunk));

            stream.on('end', () => {
                console.log(hash.digest('hex'));
                resolve();
            });

            stream.on('error', (error) => reject(error));
        });
    } catch {
        console.log('Operation failed');
    }
};

export default hash;