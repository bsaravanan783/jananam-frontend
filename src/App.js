import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Header from "./Components/Header";
import Bays from "./Components/Bays";
import Alert from "./Components/Alert";
import stageImage from "./Components/stage.jpg";

const App = () => {
  const [boysBays, setBoysBays] = useState([]);
  const [girlsBays, setGirlsBays] = useState([]);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [selectedBay, setSelectedBay] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  // Fetch bay data from backend on component mount
  useEffect(() => {
    const fetchBays = async () => {
      try {
        const response = await axios.get("http://localhost:8000/getBays");
        const { boysBays, girlsBays } = response.data;
        setBoysBays(boysBays);
        setGirlsBays(girlsBays);
      } catch (error) {
        console.error("Error fetching bays:", error);
      }
    };
    fetchBays();
  }, []);

  const handleBayClick = (bay) => {
    setSelectedBay(bay);
    setIsAlertOpen(true);
  };

  const handleProceedToPayment = async () => {
    if (selectedBay && ticketCount > 0 && ticketCount <= 5) {
      const totalAmount = selectedBay.amount_of_ticket * ticketCount; // Updated to use amount_of_ticket

      const formData = {
        amount: totalAmount,
        productinfo: "Test Product",
        firstname: "Anbarasan",
        email: "ajithkumar161105@gmail.com",
      };

      try {
        const response = await axios.post(
          "http://localhost:8000/generate-hash",
          formData
        );
        const { hash, txnid } = response.data;

        const payUForm = document.createElement("form");
        payUForm.method = "POST";
        payUForm.action = "https://test.payu.in/_payment";

        const fields = {
          key: "Hfr7dn",
          txnid: txnid,
          amount: totalAmount,
          productinfo: formData.productinfo,
          firstname: formData.firstname,
          email: formData.email,
          phone: "8056901611",
          surl: "https://test.payu.in/success",
          furl: "http://localhost:5000/payment-failure",
          hash: hash,
          service_provider: "payu_paisa",
        };

        Object.keys(fields).forEach((key) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = fields[key];
          payUForm.appendChild(input);
        });

        document.body.appendChild(payUForm);
        payUForm.submit();
      } catch (error) {
        console.error("Error generating hash:", error);
        alert("Error generating hash");
      }
    } else {
      alert("Please select a valid number of tickets (1-5).");
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
        <h1 className="BayText">Bays</h1>
        <Bays
          boysBays={boysBays}
          girlsBays={girlsBays}
          onBayClick={handleBayClick}
        />
        <Alert
          isOpen={isAlertOpen}
          onClose={closeAlert}
          bayDetails={selectedBay} // Pass the entire bay object
          ticketCount={ticketCount}
          setTicketCount={setTicketCount}
          onProceed={handleProceedToPayment}
        />
      </div>
    </Router>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import { PublicClientApplication } from "@azure/msal-browser";

// const msalConfig = {
//   auth: {
//     clientId: "08a2c4f6-1de5-4546-828b-6e2ff08dd3b2", // Your Client ID
//     authority:
//       "https://login.microsoftonline.com/6b8b8296-bdff-4ad8-93ad-84bcbf3842f5", // Your tenant ID
//     redirectUri: "http://localhost", // Your redirect URI
//   },
// };

// const msalInstance = new PublicClientApplication(msalConfig);

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const initializeMSAL = async () => {
//       try {
//         await msalInstance.initialize(); // Initialize the MSAL instance
//         const accounts = msalInstance.getAllAccounts();
//         if (accounts.length > 0) {
//           setIsAuthenticated(true); // User is already authenticated
//         }
//       } catch (error) {
//         console.error("MSAL Initialization Error:", error);
//       }
//     };

//     initializeMSAL();
//   }, []);

//   const login = async () => {
//     try {
//       const loginResponse = await msalInstance.loginPopup();
//       console.log("Login successful:", loginResponse);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>My App</h1>
//       {isAuthenticated ? (
//         <p>Welcome!</p>
//       ) : (
//         <button onClick={login}>Login</button>
//       )}
//     </div>
//   );
// };

// export default App;
