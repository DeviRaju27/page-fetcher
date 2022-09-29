const request = require('request');
const fs = require("fs");
const { Console } = require('console');

const filePath = process.argv[3];
const domainPath = process.argv[2];


request(domainPath, (error, response, body) => {

  if (error) {
    console.log('error:', error);
    console.log("response code:", response.statusCode)
  } else {
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.log("file doesn't exist", error)
      } else {
        console.log(`Downloaded from ${domainPath.slice(7)} and saved ${body.length} bytes to ${filePath.slice(2)}`);
        console.log("response code:", response.statusCode)
      }
    })
  }
});