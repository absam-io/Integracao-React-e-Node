const express = require('express');
const cors = require('cors');
const app = express();

require('./Routes/index')(app); // <--- basta adicionar essa linha

app.use(cors());
app.use(express.json());
app.listen(3001, 'localhost', function() {
  console.log("... port %d in %s mode");
});
