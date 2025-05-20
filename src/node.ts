import * as http from "http";
import * as fs from "fs";
import * as url from "url";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const parsedUrl = url.parse(req.url || "", true);

  if (parsedUrl.pathname === "/favicon.ico") {
    res.writeHead(204); // No Content
    res.end();
    return;
  }

  console.log(`Request URL: ${JSON.stringify(parsedUrl)}`);
  console.log(`Request URL with params: ${JSON.stringify(parsedUrl, null, 2)}`);

  const log = Date.now();
  fs.appendFile(
    "hello.txt",
    `Hello My World! Logged at: ${log} at ${req.url}\n`,
    (err: any) => {
      if (err) throw err;
    }
  );
  //   this is the log file that has the log of the server and the time it was logged if in future you want to see the log of the server you can see this file
  res.end("Hello World\n");
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000/");
});
