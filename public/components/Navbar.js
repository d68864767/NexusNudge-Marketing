import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">NexusNudge Marketing</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/documentation">Documentation</Link>
        </li>
        <li>
          <Link to="/recommendation">Recommendation</Link>
        </li>
        <li>
          <Link to="/contribution">Contribution</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
        <li>
          <Link to="/live-demo">Live Demo</Link>
        </li>
        <li>
          <Link to="/usage">Usage</Link>
        </li>
        <li>
          <Link to="/installation">Installation</Link>
        </li>
        <li>
          <Link to="/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link to="/project-structure">Project Structure</Link>
        </li>
        <li>
          <Link to="/project-goals">Project Goals</Link>
        </li>
        <li>
          <Link to="/technologies-used">Technologies Used</Link>
        </li>
        <li>
          <Link to="/usage-examples">Usage Examples</Link>
        </li>
        <li>
          <Link to="/acknowledgments">Acknowledgments</Link>
        </li>
        <li>
          <Link to="/contributing">Contributing</Link>
        </li>
        <li>
          <Link to="/license">License</Link>
        </li>
        <li>
          <Link to="/contact-information">Contact Information</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
