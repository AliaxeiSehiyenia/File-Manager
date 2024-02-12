import os from 'os';

const osEOL = () =>
    console.log('EOL: ', JSON.stringify(os.EOL));

export default osEOL;