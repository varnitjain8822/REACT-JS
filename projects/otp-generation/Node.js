import twilio from "twilio";

const accountSid = "ACc1253f1893fcfbc4d62eb0ac7007877a";
const authToken = "f90ff9485865fdd57b7b2a46992c2cab";
const client = new twilio(accountSid, authToken);

const otp = Math.floor(100000 + Math.random() * 900000);

client.messages
  .create({
    body: `Your OTP is ${otp}. Do not share it with Varnit otherwise Varnit will empty your Account.`,
    from: "+14752588276",  
    to: "+917037060224"  
  })
  .then(message => {
    console.log("OTP sent:", otp);
    console.log("Message SID:", message.sid);
  })
  .catch(err => console.error(err));


client.messages
  .create({
    from: "whatsapp:+14155238886",   
    body: `Your OTP is ${otp}. Do not share it with Varnit otherwise Varnit will empty your Account.`,
    to: "whatsapp:+917037060224"    
  })
  .then(message => {
    console.log("OTP sent:", otp);
    console.log("Message SID:", message.sid);
  })
  .catch(err => console.error(err));
