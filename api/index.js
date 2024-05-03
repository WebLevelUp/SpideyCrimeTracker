import express from 'express';
import 'dotenv/config';
import {areaController} from './controllers/areaController.js';
import {errorHandler} from './middleware/errorHandler.js';

export const app = express();
app.use(express.json());
app.use(errorHandler);


areaController();

app.listen(3000);

process.on('uncaughtException', err => {
    console.log(`Uncaught Exception: ${err.message}`);
})
