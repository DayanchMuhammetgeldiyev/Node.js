// const { createHmac } = require("node:crypto");
// const secret = "abcdefgh";
// const hash = createHmac("sha256", secret).update('I love you').digest('hex');
// console.log(hash)


// let crypto;
// try {
//     crypto = require('node:crypto');
// } catch (err) {
//     console.log("Crypto disabled")
// }

// const {
//     createReadStream,
//     createWriteStream,
// } = require("node:fs");

// const { pipeline } = require("node:stream")
// const { scrypt, randomFill, createCipheriv } = require("node:crypto");
// const algorirthm = "aes-192-cbc";
// const password = "password to generate";
// scrypt(password, 'salt', 24, (err, key) => {
//     if (err) throw err;
//     randomFill(new Uint8Array(16), (err, iv) => {
//         if (err) throw err;

//         const cipher = createCipheriv(algorirthm, key, iv);
//         const input = createReadStream('app.js');
//         const output = createWriteStream("test.enc");
//         pipeline(input, cipher, output, (err) => {
//             if (err) throw err;
//         });
//     });
// })


const { Buffer } = require('node:buffer');
const {
    scryptSync,
    createDecipheriv
} = await import('node:crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

// Encrypted using same algorithm, key and iv.
const encrypted =
    'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted); 