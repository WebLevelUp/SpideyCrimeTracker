import {app} from '../index.js';

export function helloWorldController() {
    app.get('/', function (req, res) {
        res.send('Hello World');
    });
}
