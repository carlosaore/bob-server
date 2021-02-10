const app = require('express')();
const superRouter = require('./routes')

app.get('/', function(req, res) {
    res.status(200).send("Server is running")
});

app.use('/route', superRouter);
 
module.exports = app;