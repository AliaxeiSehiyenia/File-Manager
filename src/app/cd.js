import {chdir} from 'node:process';

const cd = async (targetDirectory) => {
    try {
        chdir(targetDirectory);
        console.log('Successfully!');
    } catch {
        console.log('Operation failed');
    }
};

export default cd;