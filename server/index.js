const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const bodyParser = require('body-parser');
const {mongoUrl} = require('./Keys');

require('./User');
const requires = require('./requires');
const requireTokens = require('./middleware/requireToken');
const authRoutes = require('./routes/authRoutes');

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to Mongo');
});

mongoose.connection.on('error', err => {
  console.log('Error', err);
});

app.post('/', (req, res) => {
  res.send('hello');
  console.log(req.body);
});

app.get('/', requireTokens, (req, res) => {
  // res.send('loggin' + req.user.pw);
  res.send({email:req.user.userName})
});

// app.get('/2', requires, (req, res) => {
//   res.send('loggin' + req.user.pw);
// });

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
