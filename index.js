// Using Module //////////////////////////
const fs = require('fs');
const http = require('http');
const url = require('url');

/*
// Blocking Synchronous Code /////////////////////////////
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avcado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/Output.txt', textOut);
console.log('File has been written');

// Non-Blocking Asynchronous Code ////////////////////////

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR 💥');

  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log(`your file has been written`);
      });
    });
  });
});*/

// SERVER ///////////////////////////
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); //This code written synchronously
const dataObj = JSON.parse(data); //Converted the json data into js data object

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/Overview') {
    res.end('This is the Overview');
  } else if (pathName === '/Product') {
    res.end('This is the Product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data); //this data coming from the top level code
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to port 8000');
});
