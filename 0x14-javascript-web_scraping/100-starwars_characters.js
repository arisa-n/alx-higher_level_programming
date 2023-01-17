#!/usr/bin/node
// A script that prints all characters of a Star Wars movie

const request = require('request')
const film = process.argv[2]
const url = `https://swapi-api.hbtn.io/api/films/${film}`
request(url, (error, res, body) => {
    if(!error){
        const characters = JSON.parse(body).characters
        characters.forEach((character) => {
            request(character, function(err, res, body){
                if(!err){
                    console.log(JSON.parse(body).name)
                }
            })
        })
    }
})