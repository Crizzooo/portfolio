/*eslint-disable camelcase*/
const path = require('path');
const express = require('express');
const fs = require('fs');


const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, () => {
  console.log('Server listening on Port: ', PORT);
});



app.use(express.static(path.join(__dirname, '..', 'client/public/')));

app.get('/resume', (req, res, next) => {
  var file = fs.createReadStream(path.join(__dirname, '..', 'client/public/docs', 'resume.pdf'));
  var stat = fs.statSync(path.join(__dirname, '..', 'client/public/docs', 'resume.pdf'));
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=chris_rizzo_resume.pdf');
  file.pipe(res);
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
