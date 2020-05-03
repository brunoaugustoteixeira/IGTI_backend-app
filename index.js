const request = require('request');

request('https://randomuser.me/api/?results=5', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  
  body.results.forEach(element => {
    console.log(element.name.first );
  });
  
});