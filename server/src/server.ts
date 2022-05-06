import express from 'express';
import cors from 'cors';

import { config } from './config';
import { route } from './routes/feedback';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.use('/feedbacks', route);

const port = process.env.PORT || config.port;

app.listen(port, () => {
   console.log(`
      Server is running
      http://localhost:${port}
   `);
});