// The node:async_hooks module provides an API to track asynchronous resources. It can be accessed using
// import async_hooks from 'node:async_hooks';
import { createServer } from 'node:http';
import {
    executionAsyncId,
    executionAsyncResource,
    createHook
} from 'async_hooks';
const sym = Symbol('state'); // Private symbol to avoid pollution

createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        const cr = executionAsyncResource();
        if (cr) {
            resource[sym] = cr[sym];
        }
    }
}).enable();

const server = createServer((req, res) => {
    executionAsyncResource()[sym] = { state: req.url };
    setTimeout(function () {
        res.end(JSON.stringify(executionAsyncResource()[sym]));
    }, 100);
}).listen(3000);