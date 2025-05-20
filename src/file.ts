import * as fs from 'fs';

// fs.writeFile('hello.txt', 'Hello My World!', (err:any) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
  

fs.readFile('hello.txt', 'utf8', (err:any, data:any) => {
  if (err) throw err;
  console.log(data);
});

fs.unlinkSync('hello.txt');