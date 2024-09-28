import React from "react";
import Bay from "./Bay";

const Bays = ({ boysBays, girlsBays, onBayClick }) => {
  return (
    <div className="bays-container">
      <div className="boys-bays">
        <h2>Boys Bays</h2>
        {boysBays.map((bay) => (
          <Bay
            key={bay.bay_id}
            bayName={bay.bay_type}
            totalSeats={bay.total_count}
            availableSeats={bay.available}
            bayAmount={bay.amount_of_ticket}
            onClick={() => onBayClick(bay)}
          />
        ))}
      </div>
      <div className="girls-bays">
        <h2>Girls Bays</h2>
        {girlsBays.map((bay) => (
          <Bay
            key={bay.bay_id}
            bayName={bay.bay_type}
            totalSeats={bay.total_count}
            availableSeats={bay.available}
            bayAmount={bay.amount_of_ticket}
            onClick={() => onBayClick(bay)}
          />
        ))}
      </div>
    </div>
  );
};

export default Bays;
