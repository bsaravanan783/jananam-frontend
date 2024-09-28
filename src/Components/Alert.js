import React, { useState } from "react";
import "./Alert.css";

const Alert = ({
  isOpen,
  onClose,
  bayDetails, // Accept an object containing all bay details
  ticketCount,
  setTicketCount,
  onProceed,
}) => {
  const maxTickets = 5;
  const [error, setError] = useState("");

  const handleProceed = () => {
    if (ticketCount > maxTickets) {
      setError(`Maximum tickets allowed is ${maxTickets}.`);
      return;
    }
    setError("");
    onProceed();
  };

  const handleCancel = () => {
    onClose();
  };

  const handleTicketChange = (e) => {
    const value = Math.min(maxTickets, Math.max(1, e.target.value));
    setTicketCount(value);
    if (value > maxTickets) {
      setError(`Maximum tickets allowed is ${maxTickets}.`);
    } else {
      setError("");
    }
  };

  // Destructure the bayDetails object to get the required information
  const { bayName, amount_of_ticket } = bayDetails || {
    bayName: "",
    amount_of_ticket: 0,
  };

  return (
    isOpen && (
      <div className="alert">
        <div className="alert-content">
          <h2>Ticket Purchase</h2>
          <p>Bay Number: {bayName}</p>
          <p>Price per Ticket: ${amount_of_ticket}</p>
          <label htmlFor="ticketQuantity">Tickets (Max {maxTickets}):</label>
          <input
            type="number"
            id="ticketQuantity"
            value={ticketCount}
            onChange={handleTicketChange}
            min="1"
            max={maxTickets}
          />
          {error && (
            <p className="error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
          <p>Total Amount: ${ticketCount * amount_of_ticket}</p>
          <div className="alert-buttons">
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
            <button onClick={handleProceed} className="proceed-button">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Alert;
