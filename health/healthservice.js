const os = require('os');
const express = require('express');
const app = express();

// uses HTTP for now but might switch to socket
app.get('/', (req, res) => {
  const mem = getFreeMemory();
  const cpu = getCPUUsage();
  res.json({memory: mem, cpu: cpu});
});
app.listen(5000);


function getFreeMemory() {
  return os.freemem() / os.totalmem();
}

function getCPUUsage() {
  return os.loadavg()[1];
}
