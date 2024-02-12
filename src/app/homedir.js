import os from 'os';

const homedir = () => {
    console.log('Home Directory: ', os.homedir());
};

export default homedir;