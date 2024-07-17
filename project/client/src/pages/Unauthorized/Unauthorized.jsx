import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="unauthorized-container">
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/" className="unauthorized-link">Go to Home Page</Link>
    </div>
  );
}

export default Unauthorized;
