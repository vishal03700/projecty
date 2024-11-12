import React, { useState } from 'react';

function LoginComponent() {
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (name.trim()) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter your name');
    }
  };

  const handleLogout = () => {
    setName('');
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center', marginLeft: '500px' }}>
     
      {!isLoggedIn ? (
        <div>
         <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    fontSize: '18px',
    padding: '12px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
  }}
/>

          <button onClick={handleLogin} style={{ marginLeft: '10px', borderBlock:"20px" }}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginComponent;
