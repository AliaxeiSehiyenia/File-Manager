import path from 'path';
import fs from 'fs';

const copy = async (pathToFile, pathToNewDirectory) => {
    try {
        const __fileName = path.basename(pathToFile);
        const fullPathNewFile = path.join(pathToNewDirectory, __fileName);

        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(fullPathNewFile);

        writeStream.on('error', () => {
            console.error('Operation failed');
        });

        readStream.pipe(writeStream);

        await writeStream.on('close', () => console.log('File copied successfully!'));
    } catch {
        console.log('Operation failed');
    }
};

export default copy;