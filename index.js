const request = require('./request')
const express = require('express');

const app = express();
var result = "";

async function sendRequest () {
    let { body, response } = await request.get('https://randomuser.me/api/?results=5')

    if (response.statusCode !== 200) {
        return  console.log(response.statusCode + " " + response.statusMessage)
    }
    success(response, body)
}

function success (response,  body)
{
    body.results.forEach(element => {
        result += '<li>' + element.name.first + '</li>';
    });
}

app.get('/', async (req, res) => {

    await sendRequest();

    html = '<html><body>';
    html += '<br>';
    html += '<h1>Lista de Nomes</h1>';
    html += '<ul>';
    html += result;
    html += '</ul></body></html>';
    
    res.send ( html)

    result = "";
});

app.listen(process.env.PORT || 3000);

