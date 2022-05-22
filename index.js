const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
  const event = req.body;

  console.log(event);

  // axios.post('http://localhost:33014/query_service-1.0-SNAPSHOT/events', event).catch((err) => {
  //   console.log(err.message);
  // });
  axios.post('http://localhost:8080/posts-1.0-SNAPSHOT/events', event).catch((err) => {
    console.log(`Post event to Posts failed with: ${err.message}`);
  });
  axios.post('http://localhost:33013/comments-1.0-SNAPSHOT/events', event).catch((err) => {
    console.log(`Post event to Comments failed with: ${err.message}`);
  });

  res.send({status: 'OK'});
});

app.listen(4005, () => {
  console.log(`Server started on 4005`);
});
