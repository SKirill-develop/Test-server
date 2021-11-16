import express from 'express';
const port = 3002;
const app = express();
import fetch from 'node-fetch';

app.get('/', (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send('Hello, Server!');
  fetch('https://api.stellar.expert/explorer/public/asset/DEPO-GC7J3ZOQ4GG4QKS57JQOQQWAP636GCO6JFL5HTJRVNRWILAAM6BDSKLX', {
    headers: {
      "Content-Type": "application/json"
    }
  })
.then(resp => resp.json())
.then(resp => console.log(resp))
.catch(err => console.log(err))
});

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});



