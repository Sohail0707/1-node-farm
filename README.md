## USING MODULE

We initialise the modules at the begining of the code that we could use that anywhere in the code<br/>
const #MODULE_NAME = require('#ACTUAL_MODULE_NAME / LOCATION_IF_MODULE_IS_USER_DEFINED');

## READING AND WRITING FILE:

<h3>Blocking Or Synchronous Code</h3>
This code blocks the single thread untill it finish execution. this code can return a value or data, which we can store in a variable.<br/>

<h4>SYNTAX-READ-FILE</h4>
const #VARIABLE-NAME = fs.readFileSync('#FILE_LOCATION', 'utf-8');<br/>

<h4>SYNTAX-WRITE-FILE</h4>
fs.writeFileSync('#FILE_LOCATION', #DATA_WANT_TO_WRITE);<br/>

<h3>Non-Blocking Or Asynchronous Code</h3>
we never store it in a variable. We use callback function to read the data in the background. (err, data)=> this is the callback function for read file. the argument 'data' can has any name. (err) => this is the callback function for write file. because it doesn't return any data. We can use the 'data' to execute a code and also check for 'err' to print an error message.<br/>

<h4>SYNTAX-READ-FILE</h4>
fs.readFile('#FILE_LOCATION', 'utf-8', (err, #DATA_NAME) =>{CODE wanna execute after file-read});<br/>

<h4>SYNTAX-WRITE-FILE</h4>
fs.writeFile('#FILE_LOCATION', `#DATA_WANT_TO_WRITE`, 'utf-8', (err) => { CODE wanna execute after file-write});
<br/><br/>

## CREATING A SERVER

First we need to initialise a module called http. We will use it to creat a web server. It has two parameter 'req' and 'res'. 'res' used for send response to the browser. It can be a message or a html page. 'req' is an object with lots of data. Some of theM we will be using during this course.<br/>
Here we also need to define a port and IP address, where we want to send response. Adding a callback function is optional with it

<h4>SYNTAX_WEB_SERVER</h4>
const #SERVER_NAME = http.createServer((req, res) => {res.end('#SERVER_MESSAGE')});<br/>

#SERVER_NAME.listen(#PORT, '#IP', () => {console.log('#A_SUITABLE_MESSAGE')});
<br/><br/>

## CONCEPT OF ROUTING

Till now what I have learnt about routing is, we do routing to create a variation of the url which called a rout and send different response to different rout. To implement it we need to initialise a module called 'url'. Then we use it with 'req' parameter.
We use it inside the server code.<br/>

<h4>SYNTAX-ROUTING</h4>
const NAME_OF_THE_VARIATION = req.url;<br/>
The url will look like — IP:PORT/NAME_OF_THE_VARIATION (127.0.0.1:8000/Overview);<br/>

We can also secify a status code for a specific rout.<br/>
For example we can specify a status code 404, if the url is invalid.
res.writeHead(404);
<br/><br/>

## HTTP HEADER

http header is set of information that derfines the type of content we are sending to the browser as a respnse. There are many headers. But we can also specify our own header.<br/>

<h4>SYNTAX-HEADER</h4>
res.writeHead(#STATUS_CODE, {'content-type': '#TYPE_OF_CONTENT'});<br/>
For ex- res.writeHead(200, {'Content-type': 'text/html'});
<br/><br/>

## IMPLEMENTING API

An API is a set of information that we read from memory, and send the data to the browser as a response.
When I'm implementing this, I found that we don't write the 'readFile' code into the server code in some cases. Although it's not a major problem. But when a client will send a request to the server, the 'fileRead' code will be executed each time. That's why we write the 'fileRead' code at the top level code.
<br/><br/>

## HTML TEMPLATE

Here we have templates to show pages of NODE FARM application. Template is just a HTML file. For a certain request, We will send the HTML page as a response. To convert a HTML file into a template, I'll be replacing every data with placeholder. And at time of sending the template to the browser, I'll replace the data with actual data from the JSON file.
<br/><br/>

## FILLING TEMPLATE WITH DATA

First we read the HTML templates at the begining. we can write it Synchronously. Because we will read the data at once at the begining. So it's not gonna block our code.<br/>

<h4>STEP-1: (call a function for each object in the data.json file)</h4>
Keep in mind, we cannon use data.json file in javascript. We need to convert that into javascript object. For that we use a method JSON.parse(#DATA); and store it into a variable.<br/>
Now we will call the function for into a specific rout where we want to send our html page. In this project I am using '/Overview' <br/>

<h6>CALLING-THE-'replaceTemplate()'-FUNCTION</h6>

const #HTML_PAGE = #DATA_OBJ.map((el) => replaceTemplate(#TEMPLATE, el)).join('');<br/>
#HTML_PAGE-- 'name of replaced html file, which we are gonna send to the browser';<br/>
#DATA_OBJ-- 'const #DATA_OBJ = JSON.parse(#DATA)';<br/>
el-- 'for each element'<br/>
#TEMPLATE-- 'html template where we want replace the placeholders'<br/>
.join('')-- 'used to convert the object into a string'

<h4>STEP-2: (make the function replaceTemplate())</h4>

We will make this function outside the server code. Then change every placeholder that we made in the template.<br/>
const replaceTemplate = (temp, product) => {let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);<br/>
return output;}
<br/><br/>

## PARSING

What I learnt, parsing is basicaly extracting variables from an 'url'.

<h4>SYNTAX-PARSING-URL</h4>
const { query, pathname } = url.parse(req.url, true)<br/>
What it does is, it extracts different variables of the url. Then it will make 2 variables 'query' and 'pathname'. Then it will asign the value of 'query' and 'pathname' variable from url to the 'query' and 'pathname' which we decleared here.<br/>
This is a latest syntax I am also less familier with it.
<br/><br/>

## USING OWN MODULE

<h4>MAKE-OWN-MODULE</h4>
First make a javascript file. Inside the file using this Syntax<br/>
module.exports = (#PARAMETER) => {#CODE FOR THE FUNCTION}<br/>
This function doesn't need any name.<br/>

<h4>IMPORT-OWN-MODULE</h4>
const #MODULE_NAME = require('#LOCATION_OF_THE-MODULE');
<br/><br/>

## INSTALLING NPM PACKAGES

First we need to run 'npm init' into the terminal. This will initialise the 'npm' and will create a 'package.json' file. During initialisation, this will ask some questions.<br/>
Then we will run 'npm i #PACKAGE_NAME' or 'npm install #PACKAGE_NAME'.<br/>
There are two types of packeges or we call them dependancy. One is called Simple dipendency and One is called DevDependency.<br/>

<h4>Using Nodemon</h4>
This is a DevDependency which we use to run the terminal automatically every time we change our code. Basically we don't need to run 'node index.js' every time.<br/>
There are two method to install nodemon. The local method and global method.

<h6>LOCAL-METHOD</h6>
In this method, we cannot use nodemon outside the file we are working now. run 'npm i nopdemon--save-dev' dev means developer.<br/>
Then find out 'package.json' file. Then change this ("test": "echo \"Error: no test specified\" && exit 1") into ("start": "nodemon index.js"). Then into the terminal, simply run 'node start'.<br/>

<h6>GLOBAL-METHOD</h6>
In this method we install nodemon globaly. means we can use it in any project. Run 'npm i nodemon--global' If this returns any error. Run 'sudo npm i nodemon--global' this will ask your system password. Because it will install into your entire system.<br/>
To run it we don't need to edit any code in 'package.json' file. We simply run 'nodemon index.js'
<br/><br/>

## MODULE VERSION

In 'package.json' file we can find the version that we installed of a package. ("nodemon": "^2.0.21") <br/>
"#PACKAGE_NAME": "^#MAJOR_RELEASE.#MINOR_RELEASE.PATCH_UPDATE" <br/>
Here '^' means it support only minor and patch release. '~' means it support only patch release and '\*' means all release.
<br/><br/>

<h4>CHECK FOR UPDATE</h4>

'npm outdated'

<h4>UPDATE A PACKAGE</h4>

'npm update #PACKAGE_NAME'

<h6>IMPORTENT NOTE FOR NPM PACKAGE</h6>
When we send our code to github or any where. We don't send the 'node_module' folder. That's why when someone will download the code. they need run 'npm install' to get the 'node_module' folder. This instraction will download the required packages mentioned in 'package.json' folder.
