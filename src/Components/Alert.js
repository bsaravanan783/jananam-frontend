import React, { useState } from 'react';
import './Alert.css';

const Alert = ({ isOpen, onClose, bayNo, bayAmount, ticketCount, setTicketCount, onProceed }) => {
  const maxTickets = 5;
  const [error, setError] = useState('');

  const handleProceed = () => {
    if (ticketCount > maxTickets) {
      setError(`Maximum tickets allowed is ${maxTickets}.`);
      return;
    }
    setError(''); 
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
      setError('');
    }
  };

  return (
    isOpen && (
      <div className="alert">
        <div className="alert-content">
          <h2>Ticket Purchase</h2>
          <p>Bay Number: {bayNo}</p>
          <p>Price per Ticket: ${bayAmount}</p>
          <label htmlFor="ticketQuantity">Tickets (Max {maxTickets}):</label>
          <input
            type="number"
            id="ticketQuantity"
            value={ticketCount}
            onChange={handleTicketChange}
            min="1"
            max={maxTickets}
          />
          {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>} 
          <p>Total Amount: ${ticketCount * bayAmount}</p>
          <div className="alert-buttons">
            <button onClick={handleCancel} className="cancel-button">Cancel</button>
            <button onClick={handleProceed} className="proceed-button">Proceed to Payment</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Alert;
