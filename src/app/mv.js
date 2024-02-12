import copy from './copy.js';
import rm from './rm.js';

const mv = async (pathToFile, pathToNewDirectory) => {
    try {
        await copy(pathToFile, pathToNewDirectory);
        await rm(pathToFile);
    } catch {
        console.log('Operation failed');
    }
};

export default mv;