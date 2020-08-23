const express = require('express');
//loger to log incoming request
const morgan = require('morgan');
//To protect server info
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
//import middleware
const middlewares = require('./middlewares');
require('dotenv').config();
const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('combined'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome!',
  });
});

//use before middleware
app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
