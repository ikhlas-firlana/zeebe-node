const zb = require('zeebe-node');

async function main() {
    const zbc = new zb.ZBClient('localhost:26500');

    zbc.createWorker('zebee-worker-id', 'log', (job, complete) => {
        console.log(job);
        complete.success({id: 'oke'});
    });
}

main();