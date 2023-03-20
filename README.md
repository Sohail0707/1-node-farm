# 1-Node-Farm

Right now I'm learning back-end web development from udemy. Through this course, I'll be learning Nodejs, Express and mongoDB database. In here I'll be writing my learning experience

## Using Module

const #MODULE_NAME = require('#ACTUAL_MODULE_NAME / LOCATION_IF_MODULE_IS_USER_DEFINED');

## Blocking Synchronous code

This code blocks the single thread untill it finish execution. this code can return a value or data, which we can store in a variable.

### Syntax-read-file

const #VARIABLE-NAME = fs.readFileSync('#FILE_LOCATION', 'utf-8');

### Syntax-write-file

fs.writeFileSync('#FILE_LOCATION', #DATA_WANT_TO_WRITE);

## Non-blocking Asynchronous code

we never store it in a variable. We use callback function to read the data in the background. (err, data)=> this is the callback function for read file. the argument 'data' can has any name. (err) => this is the callback function for write file. because it doesn't return any data. We can use the 'data' to execute a code and also check for 'err' to print an error message.

### Syntax-read-file

fs.readFile('#FILE_LOCATION', 'utf-8', (err, #DATA_NAME) =>{CODE wanna execute after file-read});

### Syntax-write-file

fs.writeFile('#FILE_LOCATION', `#DATA_WANT_TO_WRITE`, 'utf-8', (err) => { CODE wanna execute after file-write});

## Creating a Server

First we need to initialise a module called http. We will use it to creat a web server. It has two parameter 'req' and 'res'. 'res' used for send response to the browser. It can be a message or a html page. 'req' is an object with lots of data. Some of theM we will be using during this course.<br/>
Here we also need to define a port and IP address, where we want to send response. Adding a callback function is optional with it

### Syntax-web-server

const #SERVER_NAME = http.createServer((req, res) => {
res.end('#SERVER_MESSAGE');
});

#SERVER_NAME.listen(#PORT, '#IP', () => {
console.log('#A_SUITABLE_MESSAGE');
});

## Concept Of Routing

Till now what I have learnt about routing is, we do routing to create a variation of the url and send different response to different url. To implement it we need to initialise a module called 'url'. Then we use it with 'req' parameter;
We use it inside the server code.

### Syntax-Routing

const NAME_OF_THE_VARIATION = req.THE_NAME_INITIALISED_FOR_url;<br/>
The url is look like — IP:PORT/NAME_OF_THE_VARIATION (127.0.0.1:8000/Overview);

We can also secify a status code for a specific routing.<br/>
For example we can specify a status code 404, if the url is invalid.
res.writeHead(404);

## HTTP HEADER

http header is set of information that derfines the type of content we are sending to the browser as a respnse. There are many headers. But we can also specify our own header.

### Syntax-Header

res.writeHead(#STATUS_CODE, {
'content-type': '#TYPE_OF_CONTENT',
});

## Implementing an API

In an API we read a file from memory, and send the data to the browser as a response.
When I'm implementing this, I found that I wrote the readFile code into the server code. Although it's not a major problem. But when a client will send a request to the server, the fileRead code will be executed each time. That's why wrote the fileRead code at the top level code.

## HTML Template

Here we have templates to show pages of NODE FARM application. Template is just a HTML file. For a certain request, We will send the HTML page as a response. To convert a HTML file into a template, I'll be replacing every data with placeholder. And at time of sending the template to the browser, I'll replace the data with actual data from the JSON file.

## Filling the HTML template with data

First we read the HTML templates at the begining. we can write it Synchronously. Because we will read the data at once at the begining. So it's not gonna block our code.

### Step-1 (call a function for each object in the data.json file)

Keep in mind, we cannon use data.json file in javascript. We need to convert that into javascript object. For that we use a method JSON.parse(#DATA); and store it into a variable.<br/>
Now we will call the function for into a specific rout where we want to send our html page. In this project I am using '/Overview'

#### CALLING THE 'REPLACE TEMPLATE' FUNCTION

const #HTML_PAGE = #DATA_OBJ.map((el) => replaceTemplate(#TEMPLATE, el)).join('');<br/>
#HTML_PAGE-- 'name of replaced html file, which we are gonna send to the browser';<br/>
#DATA_OBJ-- 'const #DATA_OBJ = JSON.parse(#DATA)';<br/>
el-- 'for each element'<br/>
#TEMPLATE-- 'html template where we want replace the placeholders'<br/>
.join('')-- 'used to convert the object into a string'

### Step-2 (make the function replaceTemplate());

We will make this function outside the server code. Then change every placeholder that we made in the template.<br/>
const replaceTemplate = (temp, product) => {
let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
return output;
}

## Parsing

What I learnt, parsing is basicaly extracting variables from an 'url'.

### Syntax-Parsing_url

const { query, pathname } = url.parse(req.url, true);<br/>
What it does is, it extracts different variables of the url. Then it will make 2 variables. And the will asign the value of 'query' and 'pathname' variable from url to the 'query' and 'pathname' which we decleared here. This is a latest syntax I am also less familier with it.

## Using Own Module

### Make module

First make a javascript file. Inside the file using this Syntax<br/>
module.exports = (#PARAMETER) => { #CODE FOR THE FUNCTION };<br/>
This function has no name.

### Import Module

const #MODULE_NAME = require('#LOCATION_OF_THE-MODULE');
