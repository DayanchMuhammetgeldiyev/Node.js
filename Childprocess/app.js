// const { spawn } = require('node:child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
// });


// Child-process
// - exec -  Kabuk/konsol işlemi başlatmak için kullanılır.
// - execFile
// - spawn - Yazılan komutu yeni işlem başlatıp çalıştırır.
// - fork  – Alt işlem başlatmak için kullanılır.

// - EXEC

// const child_process = require('child_process');

// const islem = child_process.exec('node --version', function (error, stdout, stderr) {

//     if (error) throw error;

//     console.log('stdout: ' + stdout);
//     console.log('stderr: ' + stderr);

// });

// islem.on('exit', function (code, signal) {
//     console.log('İşlem tamamlandı. İşlem kodu:  ' + code);
// });

