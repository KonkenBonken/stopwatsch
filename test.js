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

})();