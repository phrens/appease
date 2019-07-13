const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const app = express();

const dbURI = require('./config/keys').mongoURI;

const db = mongoose.connect(dbURI, { useNewUrlParser: true });

db.then(() => console.log('Success')).catch(err =>
  console.log(`Error: ${err}`)
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Appease start dev');
});

port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
