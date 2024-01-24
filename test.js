import stopwatsh from './index.js';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {

  await sleep(100)
  console.log(stopwatsh.time)
  await sleep(500)
  console.log(stopwatsh.time)


  stopwatsh.restart()
  await sleep(100)
  console.log(stopwatsh.time)
  await sleep(50)

  stopwatsh.stop()
  console.log(stopwatsh.time)
  await sleep(100)
  console.log(stopwatsh.time)

  stopwatsh.start()
  await sleep(100)
  console.log(stopwatsh.time)

  await sleep(1000)
  console.log(stopwatsh.s)
  console.log(stopwatsh.m)
  console.log(stopwatsh.h)

})();