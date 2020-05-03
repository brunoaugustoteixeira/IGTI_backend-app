const request = require('request');
const express = require('express');


function getNames()
{
    request('https://randomuser.me/api/?results=5', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    
    body.results.forEach(element => {
        element.name.first;
        console.log(element.name.first );
    });
    
    });
}

const app = express();

app.get('/', (req, res) => res.send ( getNames()
));

app.listen(process.env.PORT || 3000);

