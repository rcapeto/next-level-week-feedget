import express from 'express';
import cors from 'cors';

import { config } from './config';
import { route } from './routes/feedback';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/feedbacks', route);

app.listen(config.port, () => {
   console.log(`
      Server is running
      http://localhost:${config.port}
   `);
});