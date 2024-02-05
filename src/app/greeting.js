const greeting = async (userName) => {
    if (!userName) {
        console.error('The username is not specified');
        console.log('Use "npm start -- --username=your_username"');
        console.log('or');
        console.log('Use ""npm start --username=your_username"');
        process.exit(1);
    } else if (typeof userName === 'string') {
        console.log(`Welcome to the File Manager, ${userName}!`);
    }
};

export default greeting