import React from 'react';

const Example = () => {
  return (
    <div>
      <h2>Example Code</h2>
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

export default Example;
