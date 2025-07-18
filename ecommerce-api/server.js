import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routers/index.js';
import dbConnection from './src/config/database.js';
import logger from './src/middlewares/logger.js';


dotenv.config();

const app = express();
dbConnection();
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome!!');
});

app.use('/api', routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 3000}`);
});