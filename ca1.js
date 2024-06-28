const express = require('express');
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('This is the second question in CA-1');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
