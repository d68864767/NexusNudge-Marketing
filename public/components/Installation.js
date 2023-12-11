import React from 'react';

const Installation = () => {
  return (
    <div>
      <h2>Installation</h2>
      <p>To install NexusNudge Marketing, follow these steps:</p>
      <ol>
        <li>Clone the repository:</li>
        <pre>
          <code>git clone https://github.com/your-username/nexusnudge-marketing.git</code>
        </pre>
        <li>Navigate to the server directory and install backend dependencies:</li>
        <pre>
          <code>cd server</code>
          <code>npm install</code>
        </pre>
        <li>Configure your database settings in the server configuration:</li>
        <pre>
          <code>cd config</code>
          <code>cp config.example.js config.js</code>
          <code>vi config.js</code>
        </pre>
        <li>Run the server:</li>
        <pre>
          <code>npm start</code>
        </pre>
        <li>Navigate to the client directory and install frontend dependencies:</li>
        <pre>
          <code>cd ../client</code>
          <code>npm install</code>
        </pre>
        <li>Start the frontend:</li>
        <pre>
          <code>npm start</code>
        </pre>
      </ol>
    </div>
  );
};

export default Installation;
