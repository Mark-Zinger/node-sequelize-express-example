const express = require('express');
const routes = require('./routes');
const logger = require('morgan');
var multer = require('multer');
var upload = multer();
var upload = multer();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true}));
app.use(upload.array());
app.use(logger('dev'))


app.use('/api', routes);
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))