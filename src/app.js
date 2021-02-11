const app = require('express')();
const superRouter = require('./routes')
const http = require('http');
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const _ = require('lodash');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
    let quantity = Number(req.body.Body.replace(/\D/g,''));
    quantity = quantity < 10 ? quantity : 10;
    const message = quantity === 0 || quantity === undefined
        ? "No beer for you"
        : "🍺".repeat(quantity);
    const twiml = new MessagingResponse();
    twiml.message(message);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
/*
app.get('/', function(req, res) {
    const response = new MessagingResponse();
    response.message(`Beer`)
    res.status(200).send("beer sent")
});
*/
app.use('/route', superRouter);
 
module.exports = app;