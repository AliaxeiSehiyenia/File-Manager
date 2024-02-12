import fs from 'fs';
import zlib from 'zlib';

const decompress = async (pathToFile, pathToDestination) => {
    try {
        await fs.promises.access(pathToFile);

        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(pathToDestination);
        const brotliStream = zlib.createBrotliDecompress();

        readStream.on('error', () => console.log('Operation failed'));
        writeStream.on('error', () => console.log('Operation failed'));
        brotliStream.on('error', () => console.log('Operation failed'));

        readStream.pipe(brotliStream).pipe(writeStream);

        await new Promise((resolve) => writeStream.on('close', () => {
            console.log('decompressed successfully!');
            resolve();
        }));
    } catch {
        console.log('Operation failed');
    }
};

export default decompress;