import path from 'path';
import fs from 'fs/promises';

const rn = async (oldFileName, newFileName) => {
    try {
        const __dirname = path.dirname(oldFileName);
        const newFullFileName = path.join(__dirname, newFileName);

        await fs.access(oldFileName);
        await fs.rename(oldFileName, newFullFileName);
        console.log('File renamed successfully!');
    } catch {
        console.error('Operation failed');
    }
};

export default rn;