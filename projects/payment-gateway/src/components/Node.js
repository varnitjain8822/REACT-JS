import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

// Create order
app.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100, // in paise
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
});
