// Using Module //////////////////////////
const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./Module/replaceTemplate');

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

// Reading template. this code can be written synchronously because it will executed once at the bigining
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);

// Reading data.json
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data); //Converted the json data into js data object

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview Page
  if (pathname === '/' || pathname === '/Overview') {
    res.writeHead(200, { 'Content-type': 'text/html' }); // Specifies the type of content

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);
  }

  // Product Page
  else if (pathname === '/Product') {
    res.writeHead(200, { 'Content-type': 'text/html' }); // Specifies the type of content

    const productHtml = dataObj[query.id];
    const output = replaceTemplate(tempProduct, productHtml);
    res.end(output);
  }

  // API Page
  else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data); //this data coming from the top level code
  }

  // Not Found
  else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to port 8000');
});
