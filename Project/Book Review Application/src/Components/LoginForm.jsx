import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/welcome/${email}`);
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`} id="container">
      <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
          {isSignUp && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {isSignUp && <button type="submit">Sign Up</button>}
          {!isSignUp && <button type="submit">Sign In</button>}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-right ${isSignUp ? '' : 'hidden'}`}>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to get going</p>
            <p>New User?</p>
            <button className="hidden" id="login" onClick={toggleMode}>
              Sign Up
            </button>
          </div>
          <div className={`toggle-panel toggle-left ${isSignUp ? 'hidden' : ''}`}>
            <h1>Hello There!</h1>
            <p>Enter your details to begin your adventure</p>
            <p>Already a user?</p>
            <button className="hidden" id="register" onClick={toggleMode}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
