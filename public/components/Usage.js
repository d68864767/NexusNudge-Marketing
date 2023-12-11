import React from 'react';

const Usage = () => {
  return (
    <div>
      <h2>Usage Examples</h2>
      <p>
        Here are some usage examples to help you get started with NexusNudge Marketing:
      </p>
      <pre>
        <code>
          // Example code snippet for creating a personalized product recommendation using NexusNudge Marketing API
          const marketingService = require('nexusnudge-service');

          const recommendation = marketingService.getRecommendation('customer1');

          console.log(recommendation);
        </code>
      </pre>
    </div>
  );
};

export default Usage;
