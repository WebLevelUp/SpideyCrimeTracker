import express from "express";
import {helloWorldController} from "./controllers/helloWorldController.js";

const app = express()

helloWorldController(app)

app.listen(3000)
