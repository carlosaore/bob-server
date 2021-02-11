const app = require('express')();
const superRouter = require('./routes')
require('dotenv').config();
//const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');
const sendToChief = require('./routes/sendtochief');

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
//https://www.twilio.com/blog/send-images-whatsapp-node-js

app.use('/sendtochief', sendToChief);

/*
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
});

app.post('/send', function(req, res) {
    const amount = Number(req.body.amount);
    const sender = req.body.sender

    client.messages 
      .create({
         from: 'whatsapp:+14155238886',
         body: `${sender} sent you ${amount} beers from a post request`,
         to: 'whatsapp:+34652568088'
       });
    //const response = new MessagingResponse();
   // response.message(`Beer`)
    res.status(200).send("beer sent")
});
*/
app.use('/route', superRouter);
 
module.exports = app;