import { createContext, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

export const Context = createContext({ isAuthorized: false, user: { role: '' } });

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [user, setUser ] = useState({ role: '' }); // Initialize user with a role property

  // Example function to log in a user (you can modify this as needed)
  const loginUser  = (userData) => {
    setIsAuthorized(true);
    setUser (userData); // Assume userData contains a role property
  };

  return (
    <Context.Provider value={{ isAuthorized, setIsAuthorized, user, setUser , loginUser  }}>
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
);