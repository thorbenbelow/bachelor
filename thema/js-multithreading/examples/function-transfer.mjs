import { parentPort, isMainThread, Worker } from "node:worker_threads"

if (isMainThread) {

  const w = new Worker('./function-transfer.mjs')

  w.on('message', msg => { eval('(' + msg + ')()') })

} else {

  function t1() {
    console.log("hello")
  }

  const t2 = () => console.log("world")

  parentPort.postMessage(t1.toString())
  parentPort.postMessage(t2.toString())
}
