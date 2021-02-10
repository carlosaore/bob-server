const express = require('express');

const router = express.Router()

router.use(function (req, res, next) {
    console.log('hello middleware, from a route object');
    //logic
    next();
});

router.get('/', function(req, res) {
    res.status(200).send("hello world (sent from a router object)");

});

module.exports = router;