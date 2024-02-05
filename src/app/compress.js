import fs from 'fs';
import zlib from 'zlib';

const compress = async (pathToFile, pathToDestination) => {
    try {
        await fs.promises.access(pathToFile);

        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(pathToDestination);
        const brotliStream = zlib.createBrotliCompress();

        readStream.on('error', () => console.log('Operation failed'));
        writeStream.on('error', () => console.log('Operation failed'));
        brotliStream.on('error', () => console.log('Operation failed'));

        readStream.pipe(brotliStream).pipe(writeStream);

        await new Promise((resolve) => writeStream.on('close', () => {
            console.log('compressed successfully!');
            resolve();
        }));
    } catch {
        console.log('Operation failed');
    }
};

export default compress;