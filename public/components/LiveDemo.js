import React from 'react';

function LiveDemo() {
  return (
    <div className="container">
      <h1>Live Demo</h1>
      <p>Check out the live demo of NexusNudge Marketing to see the platform in action.</p>
      <iframe
        title="NexusNudge Marketing Live Demo"
        width="800"
        height="450"
        src="https://www.youtube.com/embed/your-video-id"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default LiveDemo;
