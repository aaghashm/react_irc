import React from 'react';
import { useParams } from 'react-router-dom';

const WelcomePage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Thank you for signing in. Enjoy your time at the Sports Emporium!</p>
    </div>
  );
};

export default WelcomePage;