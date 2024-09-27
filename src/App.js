import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Header from './Components/Header';
import Bays from './Components/Bays';
import Alert from './Components/Alert';
import RazorPay from './Components/RazorPay';
import stageImage from './Components/stage.jpg';

const App = () => {
  const [boysBays, setBoysBays] = useState([
    { id: 1, bayName: 'Boys Bay 1', totalSeats: 80, availableSeats: 80, bayAmount: 200 },
    { id: 2, bayName: 'Boys Bay 3', totalSeats: 60, availableSeats: 60, bayAmount: 150 },
    { id: 3, bayName: 'Boys Bay 5', totalSeats: 60, availableSeats: 60, bayAmount: 150 },
  ]);

  const [girlsBays, setGirlsBays] = useState([
    { id: 4, bayName: 'Girls Bay 2', totalSeats: 120, availableSeats: 100, bayAmount: 180 },
    { id: 5, bayName: 'Girls Bay 4', totalSeats: 90, availableSeats: 80, bayAmount: 250 },
    { id: 6, bayName: 'Girls Bay 6', totalSeats: 90, availableSeats: 80, bayAmount: 250 },
  ]);

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedBay, setSelectedBay] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const handleBayClick = (bay) => {
    setSelectedBay(bay);
    setIsAlertOpen(true);
  };
  const handleProceedToPayment = () => {
    if (selectedBay && ticketCount > 0 && ticketCount <= 5) {
      const totalAmount = selectedBay.bayAmount * ticketCount;

      const updatedBays = [...boysBays, ...girlsBays].map((bay) => {
        if (bay.id === selectedBay.id) {
          return { ...bay, availableSeats: bay.availableSeats - ticketCount };
        }
        return bay;
      });

      setBoysBays(updatedBays.filter(b => b.id <= 3));
      setGirlsBays(updatedBays.filter(b => b.id > 3));
      setIsAlertOpen(false);
      setSelectedBay(null);
      setTicketCount(1);
      alert(`Proceeding to payment for amount: $${totalAmount}`);
    } else {
      alert('Please select a valid number of tickets (1-5).');
    }
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
    setSelectedBay(null);
    setTicketCount(1);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <img src={stageImage} alt="Stage" className="stage-image" />
        <h1 className='BayText'>Bays</h1>
        <Bays boysBays={boysBays} girlsBays={girlsBays} onBayClick={handleBayClick} />
        <Alert
          isOpen={isAlertOpen}
          onClose={closeAlert}
          bayNo={selectedBay ? selectedBay.bayName : ''}
          bayAmount={selectedBay ? selectedBay.bayAmount : 0}
          ticketCount={ticketCount}
          setTicketCount={setTicketCount}
          onProceed={handleProceedToPayment}
        />
        <Link to="/razorpay">
          <button className="proceed-button">Go to RazorPay</button>
        </Link>
      </div>
      <Routes>
        <Route path="/razorpay" element={<RazorPay />} />
      </Routes>
    </Router>
  );
};

export default App;
