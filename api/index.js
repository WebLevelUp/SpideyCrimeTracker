import express from 'express';
import 'dotenv/config';
import {areaController} from './controllers/areaController.js';
import {errorHandler} from './middleware/errorHandler.js';
import {authController} from './controllers/authController.js';
import {authMiddleware} from './middleware/authMiddleware.js';
import {hotspotController} from "./controllers/hotspotController.js";
import {roleController} from './controllers/roleController.js';
import {userController} from './controllers/userController.js';
import {hotspotTypeController} from './controllers/hotspotTypeController.js';

export const app = express();
app.use(express.json());
app.use(authMiddleware);
app.use(errorHandler);


areaController();
hotspotController();
hotspotTypeController();
authController();
roleController();
userController();

app.listen(3000);

process.on('uncaughtException', err => {
    console.log(`Uncaught Exception: ${err.message}`);
});