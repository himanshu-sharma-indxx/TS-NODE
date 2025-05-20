"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// fs.writeFile('hello.txt', 'Hello My World!', (err:any) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
fs.readFile('hello.txt', 'utf8', function (err, data) {
    if (err)
        throw err;
    console.log(data);
});
fs.unlinkSync('hello.txt');
