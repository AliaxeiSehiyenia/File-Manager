import fs from 'fs';
import {cwd} from 'node:process';
import path from 'path';

const add = async (fileName) => {
    try {
        const currentDirectory = cwd();
        const filePath = path.join(currentDirectory, fileName);

        await fs.writeFile(filePath, '', {flag: 'wx'}, (error) => {
            if (error) {
                console.log('Operation failed');
            }
            console.log('File added successfully!');
        });
    } catch (error) {
        console.log('Operation failed');
    }
};

export default add;