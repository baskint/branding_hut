var exec = require('child_process').exec;
const kill = require('kill-port');
let child = null;
const cmd = 'yarn run nx serve ' + process.argv.slice(2)[0];
process.stdin.on('end', () => {
  kill(3505);
  process.kill(child);
  process.exit(0);
});
process.stdin.resume();
child = exec(cmd);
child.stdout.pipe(process.stdout);
