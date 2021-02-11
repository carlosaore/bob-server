const express = require('express');

const router = express.Router()

router.use(function (req, res, next) {
    console.log('middleware1');
    next();
});

router.use(function (req, res, next) {
    res.status(200).send("hello world (sent from a router object)")
    next();
});

// Both functions send a message back
/*
router.get('/', function(req, res) {
    res.status(200).send("hello world (sent from a router object)");

});
*/
module.exports = router;