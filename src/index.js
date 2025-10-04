import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';

function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('is_authenticated') === 'true';
    setIsAuthenticated(auth);
  }, []);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, Admin!</h1>
          <button
            onClick={() => {
              localStorage.removeItem('is_authenticated');
              setIsAuthenticated(false);
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
