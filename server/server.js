const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
});
