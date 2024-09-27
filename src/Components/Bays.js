import React from 'react';
import Bay from './Bay';

const Bays = ({ boysBays, girlsBays, onBayClick }) => {
  return (
    <div className="bays-container">
      <div className="boys-bays">
        <h2>Boys Bays</h2>
        {boysBays.map(bay => (
          <Bay
            key={bay.id}
            bayName={bay.bayName}
            totalSeats={bay.totalSeats}
            availableSeats={bay.availableSeats}
            bayAmount={bay.bayAmount}
            onClick={() => onBayClick(bay)}
          />
        ))}
      </div>
      <div className="girls-bays">
        <h2>Girls Bays</h2>
        {girlsBays.map(bay => (
          <Bay
            key={bay.id}
            bayName={bay.bayName}
            totalSeats={bay.totalSeats}
            availableSeats={bay.availableSeats}
            bayAmount={bay.bayAmount}
            onClick={() => onBayClick(bay)}
          />
        ))}
      </div>
    </div>
  );
};

export default Bays;
