const currentDirectory = () => {
    const currentDirectory = process.cwd();
    console.log(`current directory: ${currentDirectory}`);
};

export default currentDirectory;