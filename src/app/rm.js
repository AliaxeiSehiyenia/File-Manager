import fs from 'fs';

const rm = async (filePath) => {
    try {
        await fs.rm(filePath, (err) => {
            if (err) {
                console.log('Operation failed');
            }
            console.log('File deleted successfully!');
        });
    } catch {
        console.log('Operation failed');
    }
};

export default rm;