
const handlePayment = async () => {
  const order = await fetch("/create-order", { method: "POST" }).then(res => res.json());

  const options = {
    key: "rzp_test_RNfmaEyTZgS2T9",
    amount: order.amount,
    currency: "INR",
    name: "Your Company",
    description: "Test Transaction",
    order_id: order.id,
    handler: function (response) {
      alert("Payment ID: " + response.razorpay_payment_id);
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
