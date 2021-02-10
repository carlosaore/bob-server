const app = require('express')();
const superRouter = require('./routes')

app.get('/', function(req, res) {
    res.status(200).send("Server is running")
});

app.use('/superMiddleware', superRouter);
 
module.exports = app;