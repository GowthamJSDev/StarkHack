import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { generateToken } from './token.js';

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

app.get('/api/token?', generateToken);

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
});
