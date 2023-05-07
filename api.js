const express = require('express');
const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Alex',
  password: '1234',
  database: 'https://alexplayer050801.github.io/database/data.sql'
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Create Express app
const app = express();

// Define API endpoint to retrieve all users
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM login';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving users from database:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
