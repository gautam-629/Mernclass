const os=require('os');

console.log('Os type',os.type()) //type

console.log('Os platform',os.platform()) //platform

console.log('Cpu architecture',os.arch()) //architecture

console.log('cpu detail',os.cpus()) // cpu detail

console.log('Free memory:', os.freemem()); //free memory

console.log('total memory:', os.totalmem());  // total memory

console.log('UpTime',os.uptime()) // up time

