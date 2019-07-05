const path = require('path');
const spawn = require('child_process').spawn;

console.log('>>', path.resolve('./dist/', process.argv[2]));

const command = path.resolve('./dist/', process.argv[2]) + '/index.js';
console.log('command: ', command);
spawn('node', [ command ], { stdio: 'inherit' });