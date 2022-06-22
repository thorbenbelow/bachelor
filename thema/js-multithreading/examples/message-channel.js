const {isMainThread, Worker, parentPort} = require('node:worker_threads')



if(isMainThread) {
    console.log("Main::Start")

    const worker = new Worker(__filename);
    worker.on("message", msg => {
        console.log(msg)
    })
}else {

    class A {
        foo = "foo"
        bar(){console.log(this.foo)}
    }

    console.log("Worker::Start")

    parentPort.postMessage(A.prototype)
}