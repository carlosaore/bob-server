const app = require('express')();
require('dotenv').config();
//const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    console.log("access");
    res.status(200).send("API running")
});

app.use('/sendtochief', sendToChief);
app.use('/sendtofam', sendToFam);

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
 
module.exports = app;