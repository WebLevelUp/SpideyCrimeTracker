

export function helloWorldController(app) {
    app.get('/', function (req, res) {
        res.send('Hello World')
    })
}
