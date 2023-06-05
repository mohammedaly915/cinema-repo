import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({ name:"", number:"", cvc:"", expiry:"" });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardDetailsChange = (event) => {
    const { name, number, cvc, expiry } = event.target;
    setCardDetails({ name, number, cvc, expiry });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (paymentMethod === "card") {
      // Submit card details to your payment processor.
    } else {
      // Submit cash payment to your payment processor.
    }
  };

  return (
    
    <Container className="pay">
      <h2>Payment</h2>

      <div>
        <label>Payment Method</label>
        <select name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
        </select>
      </div>

      {paymentMethod === "card" && (<>
        <div className="payment">
        <div>
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={cardDetails.number} onChange={handleCardDetailsChange} />
        </div>
        <div>
          <label>CVC</label>
          <input type="text" name="cvc" value={cardDetails.cvc} onChange={handleCardDetailsChange} />
        </div>
        <div>
          <label>Expiry Date</label>
          <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardDetailsChange} />
        </div>
        </div>
        </>
      )}

      <button type="submit" onClick={handleSubmit}>Submit Payment</button>
      </Container>
    
  );
};

export default Payment;