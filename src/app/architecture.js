import os from 'os';

const architecture = () => {
    console.log('cpu architecture: ', os.arch());
};

export default architecture;