import { Buffer } from "node:buffer"

// const buf1 = Buffer.allocUnsafe(10)

// < Buffer 01 02 03 >
// const buf1 = Buffer.from([1, 2, 3])
// console.log(buf1)

// <Buffer 01 01 01 01>
// const buf5 = Buffer.from([257, 257.5, -255, '1']);
// console.log(buf5)

// <Buffer 74 c3 a9 73 74> (in hexadeicmal notation)
// const buf6 = Buffer.from('tést');
// console.log(buf6);


// const buf = Buffer.from('hello world', 'utf8');
// console.log(buf.toString('hex'))

// Create buffer length 10 number

// The character encodings currently supported by Node.js are the following:

// 'utf8'(alias: 'utf-8'): Multi - byte encoded Unicode characters.Many web pages and other document formats use UTF - 8. This is the default character encoding.When decoding a Buffer into a string that does not exclusively contain valid UTF - 8 data, the Unicode replacement character U + FFFD � will be used to represent those errors.

// 'utf16le'(alias: 'utf-16le'): Multi - byte encoded Unicode characters.Unlike 'utf8', each character in the string will be encoded using either 2 or 4 bytes.Node.js only supports the little - endian variant of UTF - 16.

// 'latin1': Latin - 1 stands for ISO - 8859 - 1. This character encoding only supports the Unicode characters from U + 0000 to U + 00FF.Each character is encoded using a single byte.Characters that do not fit into that range are truncated and will be mapped to characters in that range.



// const buf = Buffer.from("hello", "utf16le");
// const uint16array = new Uint16Array(
//     buf.buffer,
//     buf.byteOffset,
//     buf.length / Uint16Array.BYTES_PER_ELEMENT
// );

// console.log(uint16array)

// Prints: Uint16Array(5) [ 104, 101, 108, 108, 111 ]
