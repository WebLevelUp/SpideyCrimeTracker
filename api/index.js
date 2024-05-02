import express from "express";
import 'dotenv/config'
import {helloWorldController} from "./controllers/helloWorldController.js";
import {connection, executeStatement} from "./data/dbConnection.js";
import {TYPES} from 'tedious';

const app = express()

helloWorldController(app)

app.listen(3000)

connection.on('connect', function (err) {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Connection established.');
    }
    const query = 'SELECT * FROM SpideyCrimeTrackerDB.dbo.Area WHERE province = @province';
    const params = [
        {name: 'province', type: TYPES.VarChar, value: 'Gauteng'}, // Ensure proper name, type, and value
    ];
    executeStatement(query, params);
});

if (connection.state !== 'Connecting' && connection.state !== 'Connected') {
    connection.connect();
}