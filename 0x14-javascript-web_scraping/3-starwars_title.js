#!/usr/bin/node
// A script that reads and prints the content of a file

const request = require('request')
const url = 'https://swapi-api.alx-tools.com/api/films/:id' +process.argv[2]
request(url, function(error, response, body){
    if(error){
        console.log(error)
    }else{
        console.log(JSON.parse(body).title)
    }
})
