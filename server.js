// import config, { nodeEnv, logStars } from "./config"; - sample import statement
// console.log(config, nodeEnv); - simple usage of imported contents
// logStars("     Geetha     "); - calling the imported function of config

// https used as client
// import https from "https";

// https.get('https://github.com/geethaperuru/MERN',res =>{
//   console.log('Response status code: ',res.statusCode);
//   console.log('Headers',res.headers);
//   res.on('data',chunk=>{
//   console.log(chunk.toString());
//   });
// }).on('error', e =>{
//   console.log(e);
// });

//https as server

// import http from "http";

// const server = http.createServer();

// server.listen(8888);

// server.on("request", (req, res) => {
//   res.write("Hello USer\n");
//   setTimeout(() => {
//     res.write("I can stream");
//     res.end();
//   }, 3000);
// });

// server.close();

import config from "./config";
import express from "express";
import apiRouter from "./api";
//import fs from "fs"; - File system module
const server = express();

//setting up view engine as ejs(Effective javascript), express searches for the ejs templates under view folder  after setting up this
server.set("view engine", "ejs");

server.get("/", (req, res) => {
  res.send("Hello express");
});

server.get("/about.html", (req, res) => {
  res.send("The about page");
});

//For navigation to another page we can use by file system in the below way
// server.get("/home", (req, res) => {
//   fs.readFile("./public/index.html", (err, data) => {
//     if (err) {
//       console.log("error loading the page" + err);
//     } else {
//       res.send(data.toString());
//     }
//   });
// });

//static middleware of express that can serve static assets automatically without fs
//can run directly https://localhost:8080/index.html
server.use(express.static("public"));

server.use("/api", apiRouter);

server.get("/ejs", (req, res) => {
  res.render("index", {
    content: "     Combo of express and <em>ejs</em>            "
  });
});

server.listen(config.port, () => {
  console.info("Express listening on port", config.port);
  //server.close();
});
