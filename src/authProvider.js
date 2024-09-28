import React, { useEffect, useState } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID", // Your Client ID
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Your tenant ID
    redirectUri: "http://localhost:3000", // Your redirect URI
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initializeMSAL = async () => {
      try {
        await msalInstance.initialize(); // Initialize the MSAL instance
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length > 0) {
          setIsAuthenticated(true); // User is already authenticated
        }
      } catch (error) {
        console.error("MSAL Initialization Error:", error);
      }
    };

    initializeMSAL();
  }, []);

  const login = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup();
      console.log("Login successful:", loginResponse);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div>
      <h1>My App</h1>
      {isAuthenticated ? (
        <p>Welcome!</p>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default App;
