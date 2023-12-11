// UsageExamples.js

import React from 'react';

const UsageExamples = () => {
  return (
    <div>
      <h2>Usage Examples</h2>
      <pre>
        <code>
          {`// Example code snippet for creating a personalized product recommendation using NexusNudge Marketing API
const marketingService = require('nexusnudge-service');

const recommendation = marketingService.getRecommendation('customer1');

console.log(recommendation);`}
        </code>
      </pre>
    </div>
  );
};

export default UsageExamples;
