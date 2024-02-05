const cd = async (targetDirectory) => {
    try {
        process.chdir(targetDirectory);
        console.log('Successfully!');
    } catch {
        console.log('Operation failed');
    }
};

export default cd;