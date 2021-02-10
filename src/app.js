const app = require('express')();
const superRouter = require('./routes')

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Hello there!',
         to: 'whatsapp:+34652568088'
       })
      .then(message => console.log(message.sid));

app.get('/', function(req, res) {
    res.status(200).send("Server is running")
});

app.use('/route', superRouter);
 
module.exports = app;