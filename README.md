# MERN
This is a simple project for self learning process covering from basics of node js and react

## For working on the node js, setting up the environment first
 - npm init (used for setting up a new or existing project)\
creates a file package.json for the project,this contains the root details of the project. 
 devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.\
 Some of the examples used in this project <br/>
   - **Dependencies**
       - Express - provides robust routing
       - MongoDb - installs mongodb driver and provides connection to work with db
       - react - A JavaScript library for creating user interfaces
       - react-dom - serves as the entry point to the DOM and server renderers for React
   - **Devdependencies**
      - Nodemon - helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
      - Webpack - a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. 
      - Eslint - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
## Environment Variables
  A fundamental part of developing with Node.js, allowing app to behave differently based on the environment we want them to run in and Wherever app needs configuration, these variables are used.<br/> 
  **Basics of process.env** <br/>
Accessing environment variables in the Node.js is supported out of the box. When Node.js process boots up, it will automatically provide an access to all the existing environment variables by creating the env object as a property of the process global object.<br/>
 console.log(process.env); <br/> 
 **What ?**<br/>
  The Node injects the process.env global variable at runtime in our app to use, and it represents the state of the system environment of our app when it starts.<br/>
  **why ?**<br/>
  They externalize all environment specific aspects of the app and keep it encapsulated. Now it can run anywhere by modifying the environment variables without changing the code and without rebuilding it! <br/>
  **when ?**<br/>
  any place in your code that will change based on the environment.<br/>
  Common scenarios when you should consider using environment variables. <br/>
  - Which HTTP port to listen on<br/>
  - What path and folder your files are located in, that you want to serve<br/>
  - Pointing to a development, staging, test, or production database<br/>
  
 ## Modules in Node js
 modules are same as JavaScript libraries/ A set of functions we want to include in application.<br/>
 - Built-in Modules<br/>
    Node.js has a set of built-in modules which can be used without any further installation.<br/>
    - Some of the examples<br/>
      - fs-To handle the file system
      - http-To make Node.js act as an HTTP server
      - https-To make Node.js act as an HTTPS server.<br/>
    - Include Modules<br/>
        To include a module, use the require() function with the name of the module: <br/>
          var http = require('http');
  - Create our Own Modules<br/>
    We can create our own modules, and easily include them in your applications by exporting and importing.<br/>
    - Export Module<br/>
    Node JS Platform has provided a technique to export the following things so that other modules can reuse them without redefining.<br/>
    - Import Module<br/>
    If we observe a Node JS Application or Module, it may dependent on other existing Node JS modules or our own Modules.
    The major advantage of Modularity is reusability. We don’t need to redevelop the same existing functionality. We can import a Module and reuse that module functionality very easily.<br/>
      - Variable
      - Function
      - Module<br/>
    Syntax:<br/>
    exports.[variable/Function/Module]name=[variable/Function/Module]name;<br/>
    var [variable/Function/Module]name = require("variable/Function/Module");<br/>
  ## Server Creation (Refer https://nodejs.org/api/https.html )<br/> 
   It can be done using http/https/Express<br/>
   - import http from "http";
      ###### const server = http.createServer();
   - import https from "http";
      ###### const server = https.createServer();
   - import express from "express";
      ###### const server = express();
  ## Ports
  In TCP/IP and UDP networks, a port is an endpoint to a logical connection and the way a client program specifies a specific server program on a computer in a network. The port number identifies what type of port it is.<br/>
  Port numbers range from 0 to 65535<br/>
  - Well Known Ports<br/>
    ###### port numbers 0 to 1023 are reserved for privileged services and designated as well-known ports.
  - Registered ports
    ###### A registered port is a network port assigned by the Internet Assigned Numbers Authority for use with a certain protocol or application.These are 1024 to 49151.
  - Dynamic ports (private ports)
    ######  A port that can be used by any computer application program to communicate with any other application program running Transmission Control Protocol (TCP) or User Datagram Protocol (UDP), with no registration requirements. Dynamic ports are numbered from 49,152 through 65,535.<br/>
 ## HTTP Server Methods and Properties
- close()-Closes the server connection
   - server.close();
- listen()-Makes the server listen to ports on the computer
   - server.listen(port);
- listening-Returns true if the server is listening for connection, otherwise false
   - console.log(srvr.listening);
- maxHeadersCount-The server.maxHeadersCount property sets the maximum number of incoming headers. Default is 1000.If the server.maxHeadersCount is set to 0, there will be no limit of incoming headers.
  - srvr.maxHeadersCount = 100;
- setTimeout()-Sets the server's timeout value. Default is 2 minutes
- timeout-Sets, or gets, the server's timeout value
  - srvr.timeout = 2000;console.log(srvr.timeout); 
## https.request
```
const https = require('https');
const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
```
## https.get
```
const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});

```
## Request req events<br/>
- req.body-An object containing text parameters from the parsed request body, defaulting to {}.
- req.cookies-An object containing all of the unsigned cookies from this request (req). (eg : req.cookies.chocolatechip;)
- req.headers-An object containing the predefined/custom header given in the current request.
    ```
    console.log(req.headers);
    output<br/>
      { host: 'localhost:1337',
        connection: 'keep-alive',
        'cache-control': 'no-cache',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.89 Safari/537.36',
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, sdch',
        'accept-language': 'en-US,en;q=0.8,hi;q=0.6',
        cookie: 'sdfkslddklfk; sails.sid=s%3skdlfjkj1231lsdfnsc,m' }
    ```
 - req.hostname-Returns the hostname supplied in the host HTTP header. This header may be set either by the client or by the proxy.(req.hostname;)
 - req.method - req.method;(op : "POST"/"GET")
 - req.params-An object containing parameter values parsed from the URL path.For example if you have the route /user/:name, then the "name" from the URL path wil be available as req.params.name. This object defaults to {}.
 - req.get()-Returns the value of the specified header field in this request (req). Note that header names are case-insensitive.(eg:req.get(header);)
 - req.param()-Returns the value of the parameter with the specified name.(eg:req.param(name[, defaultValue]);)
 - req.setTimeout()-Time out this request if a response is not sent within the specified number of milliseconds.(eg:req.setTimeout(numMilliseconds);)
## Response res events
- res.badRequest()-This method is used to send a 400 ("Bad Request") response back down to the client, indicating that the request is invalid. This usually means that the request contained invalid parameters or headers, or that it tried to do something not supported by your app logic.(eg:return res.badRequest(data); or return res.badRequest();)
- res.clearCookie()-Clears cookie (name) in the response.(res.clearCookie(name [,options]);) 
  ```
    res.cookie('name', 'tobi', { path: '/admin' });
    res.clearCookie('name', { path: '/admin' });
  ```
- res.get()-Returns the current value of the specified response header (header).(res.get(header);) (res.get('Content-Type');)
- res.json()-Sends a JSON response composed of the specified data.(return res.json(data);)(return res.json({ firstName: 'Tobi' });)
- res.ok()-This method is used to send a 200 ("OK") response back down to the client. (return res.ok();)
- res.redirect()-Redirect the requesting user agent to the given absolute or relative URL. (return res.redirect('http://google.com');) (return res.redirect('/about');)
- res.send()-Send a string response in a format other than JSON (XML, CSV, plain text, etc.). (return res.send([string]);)
- res.set()-Sets specified response header (header) to the specified value (value).(res.set(headers);)
    ```
    res.set('Content-Type', 'text/plain');
    or
    res.set({
      'Content-Type': 'text/plain',
      'Content-Length': '123',
      'ETag': '12345'
    })
    ```
- res.status()-Set the status code of this response.(eg : res.status(418);)
- res.type()-Sets the "Content-Type" response header to the specified type.(res.type(type);)
    ```
      res.type('.html');
      res.type('html');
      res.type('json');
      res.type('application/json');
      res.type('png');
    ```

 
  
  
  

    





