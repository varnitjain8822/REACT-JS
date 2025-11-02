import twilio from "twilio";

const accountSid = "ACc1253f1893fcfbc4d62eb0ac7007877a";
const authToken = "e505d6a12125ce7fceb2d32f1cfb5875";
const client = new twilio(accountSid, authToken);

const otp = Math.floor(100000 + Math.random() * 900000);

client.messages
  .create({
    body: `📢 Congratulations!

Dear Tanu,

We’re delighted to inform you that you’ve been selected as the Top Candidate Coder from KIET Group of Institutions by Programming Pathshala! 🎉

You’ve earned an exclusive trip to Bombay 🏙️ where you’ll meet our expert mentors and guidance faculty for an unforgettable learning experience.

To confirm your participation, please verify using the following confidential OTP:

🔐 Your OTP is 842193. Do not share it with anyone, not even Yash — or he might just code his way into your rewards! 😄

More details regarding your trip and schedule will be shared soon.

Warm regards,
Team Programming Pathshala`,
    from: "+14752588276",  
    to: "+917300565989"  
  })
  .then(message => {
    console.log("OTP sent:", otp);
    console.log("Message SID:", message.sid);
  })
  .catch(err => console.error(err));


client.messages
  .create({
    from: "whatsapp:+14752588276",   
    body: `📢 Congratulations!

Dear Tanu,

We’re delighted to inform you that you’ve been selected as the Top Candidate Coder from KIET Group of Institutions by Programming Pathshala! 🎉

You’ve earned an exclusive trip to Bombay 🏙️ where you’ll meet our expert mentors and guidance faculty for an unforgettable learning experience.

To confirm your participation, please verify using the following confidential OTP:

🔐 Your OTP is 842193. Do not share it with anyone 

More details regarding your trip and schedule will be shared soon.

Warm regards,
Team Programming Pathshala`,
    to: "whatsapp:+917300565989"    
  })
  .then(message => {
    console.log("OTP sent:", otp);
    console.log("Message SID:", message.sid);
  })
  .catch(err => console.error(err));