const app = require('express')();
const superRouter = require('./routes')
const http = require('http');
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const _ = require('lodash');
const { Message } = require('twilio/lib/twiml/MessagingResponse');

/*
app.get('/', function(req, res) {
    client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'I opened the first beer',
         to: 'whatsapp:+34652568088'
       })
      .then(message => console.log(message.sid));
    res.status(200).send("message sent")
});
*/


app.post('/beer', (req, res) => {
    console.log(req.body)
    const twiml = new MessagingResponse();
    twiml.message('beer');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });

app.get('/', function(req, res) {
    const response = new MessagingResponse();
    response.message(`Beer`)
    res.status(200).send("beer sent")
});

app.use('/route', superRouter);
 
module.exports = app;