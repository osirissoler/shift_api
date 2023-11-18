import express, { Request, Response } from 'express';
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config')
// import * as morgan from 'morgan';

const app: express.Application = express();

dbConnection()

app.use(express.json());

//CORS
app.use(cors())

// app.use(morgan.default('dev'))

import router from './routes'

app.use('/api', router)


app.listen(process.env.PORT, () => {
  console.log(`Server running on port  ${process.env.PORT}`);
});

