import React, { useState } from 'react';
import axios from 'axios';
 
const PayU = () => {
  const [amount, setAmount] = useState("");
  const [hash, setHash] = useState("");
  const [txnid, setTxnid] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (amount === "") {
      alert("Please enter a valid amount");
    } else {
      const formData = {
        amount: amount,
        productinfo: "Test Product",
        firstname: "Anbarasan",
        email: "ajithkumar161105@gmail.com",
      };
 
      try {
        // Call backend to generate hash
        const response = await axios.post('http://localhost:5000/generate-hash', formData);
        const { hash, txnid } = response.data;
 
        // Set hash and txnid
        setHash(hash);
        setTxnid(txnid);
 
        // Submit form to PayU
        const payUForm = document.createElement('form');
        payUForm.method = 'POST';
        payUForm.action = 'https://test.payu.in/_payment';
 
        // Prepare form fields
        const fields = {
          key: "Hfr7dn",
          txnid: txnid,
          amount: amount,
          productinfo: "Test Product",
          firstname: "Anbarasan",
          email: "ajithkumar161105@gmail.com",
          phone: "8056901611",
          surl: "https://test.payu.in/_payment", // Success URL
          furl: "http://localhost:5000/payment-failure", // Failure URL
          hash: hash,
          service_provider: "payu_paisa",
        };
 
        // Append form fields
        Object.keys(fields).forEach((key) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = fields[key];
          payUForm.appendChild(input);
        });
 
        document.body.appendChild(payUForm);
        payUForm.submit(); // Automatically submit the form to PayU
      } catch (error) {
        console.error("Error generating hash:", error);
        alert("Error generating hash");
      }
    }
  };
 
  return (
    <div>
      <h1>PayU Integration</h1>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Proceed To Payment</button>
    </div>
  );
};
 
export default PayU;