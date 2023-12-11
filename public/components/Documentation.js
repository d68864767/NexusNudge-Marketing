import React from 'react';

function Documentation() {
  return (
    <div className="container">
      <h1>Documentation</h1>
      <p>Welcome to the NexusNudge Marketing documentation. Here you will find all the information you need to get started with our marketing automation platform.</p>
      <h2>Installation</h2>
      <p>To install NexusNudge Marketing, follow these steps:</p>
      <ol>
        <li>Clone the repository.</li>
        <li>Navigate to the /server directory and run npm install to install backend dependencies.</li>
        <li>Configure your database settings in the server configuration.</li>
        <li>Run the server with npm start.</li>
        <li>Navigate to the /client directory and run npm install to install frontend dependencies.</li>
        <li>Start the frontend with npm start.</li>
      </ol>
      <h2>Getting Started</h2>
      <p>Once you have installed NexusNudge Marketing, you can follow these steps to get started:</p>
      <ol>
        <li>Create an account or log in to your existing account.</li>
        <li>Explore the dashboard to familiarize yourself with the features and options available.</li>
        <li>Create a new marketing campaign by clicking on the "Create Campaign" button.</li>
        <li>Set up your campaign parameters, including target audience, messaging, and goals.</li>
        <li>Monitor the performance of your campaign using the analytics dashboard.</li>
        <li>Make adjustments to your campaign based on the insights provided by NexusNudge Marketing.</li>
      </ol>
      <h2>Usage Examples</h2>
      <p>Here are some usage examples to help you understand how to use NexusNudge Marketing:</p>
      <pre>
        <code>
          // Example code snippet for creating a personalized product recommendation using NexusNudge Marketing API
          const marketingService = require('nexusnudge-service');

          const recommendation = marketingService.getRecommendation('customer1');

          console.log(recommendation);
        </code>
      </pre>
      <h2>Contributing</h2>
      <p>We welcome contributions from the community. If you would like to contribute to NexusNudge Marketing, please follow our Contribution Guidelines for details on how to get involved.</p>
      <h2>License</h2>
      <p>This project is licensed under the MIT License. For more information, please see the LICENSE file.</p>
      <h2>Contact Information</h2>
      <p>If you have any questions or need further assistance, please contact us at your-email@example.com.</p>
    </div>
  );
}

export default Documentation;
