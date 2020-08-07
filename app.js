const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const cors = require('cors');
const students = require('./routes/api/students');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use('/static', express.static('./views/static'));
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected..!'))
  .catch((err) => console.log(err));

app.get('/login', (req, res) => res.render('login'));
app.get('/', (req, res) => res.render('index'));

app.use('/api/student', students);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Runnig on ${port}`));
const mongodb_password = '4FUE7hIh8B6Kb3vE';
const monbourl =
  'mongodb+srv://praveen:4FUE7hIh8B6Kb3vE@cluster0-yvyyk.mongodb.net/<tunicalsbs>?retryWrites=true&w=majority';
