import React from 'react';

const GettingStarted = () => {
  return (
    <div>
      <h2>Getting Started</h2>
      <ol>
        <li>Clone the repository.</li>
        <li>Navigate to the <code>/server</code> directory and run <code>npm install</code> to install backend dependencies.</li>
        <li>Configure your database settings in the server configuration.</li>
        <li>Run the server with <code>npm start</code>.</li>
        <li>Navigate to the <code>/client</code> directory and run <code>npm install</code> to install frontend dependencies.</li>
        <li>Start the frontend with <code>npm start</code>.</li>
      </ol>
    </div>
  );
};

export default GettingStarted;
