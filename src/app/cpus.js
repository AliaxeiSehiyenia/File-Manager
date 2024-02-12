import os from 'os';

const cpus = () => {
    const cpus = os.cpus();

    const dataTable = cpus.map(({ model, speed }, index) => ({
        CPU: index + 1,
        Model: model,
        'Speed (GHz)': (speed / 1000).toFixed(2),
    }));

    console.table(dataTable);
}

export default cpus;