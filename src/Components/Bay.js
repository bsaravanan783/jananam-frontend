import React from 'react';
import './Bay.css';
const Bay = ({ bayName, totalSeats, availableSeats, bayAmount, onClick }) => {
  return (
    <div className="bay" >
      <div className="bay-title">{bayName}</div>
      <div className="bay-details">
        <div className="bay-detail">Total Seats: {totalSeats}</div>
        <div className="bay-detail">Available Seats: {availableSeats}</div>
        <div className="bay-price">Price per Ticket: ${bayAmount}</div>
      </div>
      <button className="bay-button" onClick={onClick}>Select Bay</button>
    </div>
  );
};
export default Bay;
