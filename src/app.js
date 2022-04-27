const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { TRUE } = require('node-sass');
const routes = require('./routes/routes');
const db = require('./config/db/configdb');

const app = express();
const port = 3000;
//Connect DB
// db.connect();

console.log('Main Path:' + path.join(__dirname));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
//Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));

//HTTP logger
app.use(morgan('combined'));

routes(app);
app.listen(process.env.PORT || port);
