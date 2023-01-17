#!/usr/bin/node
// A script that reads and prints the content of a file

const args= process.argv
let request = require('request')
request(args[2], function(error, response, body){
    if(error){
        console.log('error: ', error)
    }else{
        console.log('code: ', response && response.statusCode)
    }
})
