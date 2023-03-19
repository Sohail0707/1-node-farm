# 1-Node-Farm

Write now I'm learning back-end web development from udemy. Through this course, I'll be learning Nodejs, Express and mongoDB database. In here I'll be writing my learning experience

## Blocking Synchronous code

This code blocks the single thread untill it finish execution. this code can return a value or data, which we can store in a variable.

--------------Syntax-read-file----------------
const textIn = fs.readFileSync('file-location', 'utf-8');

--------------Syntax-write-file---------------
fs.writeFileSync('file-location', data-want-to-write);

## Non-blocking Asynchronous code

we never store it in a variable. We use callback function to read the data in the background. (err, data)=> this is the callback function for read file. the argument 'data' can has any name. (err) => this is the callback function for write file. because it doesn't return any data.

--------------Syntax-read-file----------------
fs.readFile('file-location', 'utf-8', (err, data-name) =>{your code for 'data-name'});

--------------Syntax-write-file---------------
fs.writeFile('file-location', `the-data-want-to-write`, 'utf-8', (err) => { code want to execute after write});
