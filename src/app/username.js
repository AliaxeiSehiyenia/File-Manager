import os from 'os';

const username = () => {
    console.log('System User Name: ', os.userInfo().username);
};

export default username;