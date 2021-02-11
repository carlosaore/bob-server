require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router()
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Check for auth to use server

//Check that it's a POST request

// Check that body is not empty
router.use(function (req, res, next) {
    if (req.body === undefined) {
        res.status(400).json({
            error : "Empty body on POST request"
        })
    };
    next();
});

// Check that body contains required key-values
router.use(function (req, res, next) {
    if (req.body.name || req.body.to || req.body.message) {
        res.status(400).json({
            error : "missing data"
        })
    };
    next();
});

// Check that required key-values contains correct data
// "name" will always be a string but "to" needs to be a phone number un twillio syntax
router.use(function (req, res, next) {
    const regex = new 
    if (req.body.to.match ) {
        res.status(400).json({
            error : "missing data"
        })
    };
    next();
});



// Decode message

// Concatenate message

//POST to send message through twillio
router.post('/', function(req, res) {
    client.messages 
      .create({
         from: 'whatsapp:+14155238886',
         body: 'sent you a beer from a get request',
         to: 'whatsapp:+34652568088'
       })
      .then(message => console.log(message));
    //res.status(200).send("message sent")
    //const response = new MessagingResponse();
   // response.message(`Beer`)
    res.status(200).send("beer sent")
    }
)
// Both functions send a message back
/*
router.get('/', function(req, res) {
    res.status(200).send("hello world (sent from a router object)");

});
*/
module.exports = router;