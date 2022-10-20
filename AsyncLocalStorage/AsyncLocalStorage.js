import http from "node:http";
import { AsyncLocalStorage } from "node:async_hooks";

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
    const id = asyncLocalStorage.getStore();
    console.log(`${id !== undefined ? id : '-'}:`, msg);
}

let idSeq = 0;

http.createServer((req, res) => {
    asyncLocalStorage.run(idSeq++, () => {
        logWithId('start');
        setImmediate(() => {
            logWithId('finished');
            res.end();
        });
    });
}).listen(8080);


http.get('http://localhost:8080');



//  AsyncLocalStorage used for storage and safe. AsyncLocalStorage just only used for storage