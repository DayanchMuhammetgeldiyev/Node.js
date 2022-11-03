// const { createHmac } = require("node:crypto");
// const secret = "abcdefgh";
// const hash = createHmac("sha256", secret).update('I love you').digest('hex');
// console.log(hash)


let crypto;
try {
    crypto = require('node:crypto');
} catch (err) {
    console.log("Crypto disabled")
}