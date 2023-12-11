const express = require('express');
const app = express();

// Import routes
const routes = require('./routes');

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
