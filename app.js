const express = require('express');
const path = require('path');
const db = require('./config/db');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/it', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'IT.html'));
});

app.get('/management', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Management.html'));
});

app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'AboutUs.html'));
});

app.get('/api/colleges/it', async (req, res) => {
    try {
      const [rows, fields] = await db.query('SELECT * FROM IT'); // Change the query according to your database schema
      res.json(rows);
    } catch (error) {
      console.error('Error fetching IT colleges:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/colleges/management', async (req, res) => {
    try {
      const [rows, fields] = await db.query('SELECT * FROM MANAGEMENT'); // Change the query according to your database schema
      res.json(rows);
    } catch (error) {
      console.error('Error fetching Management colleges:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/colleges/it-by-state', async (req, res) => {
    try {
        const { state } = req.query; // Get the state parameter from the query string

        const query = 'SELECT * FROM IT WHERE state = ?'; // Your SQL query
        const [rows, fields] = await db.query(query, [state]);

        res.json(rows);
    } catch (error) {
        console.error('Error fetching IT colleges by state:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/colleges/management-by-state', async (req, res) => {
  try {
      const { state } = req.query; // Get the state parameter from the query string

      const query = 'SELECT * FROM MANAGEMENT WHERE state = ?'; // Your SQL query
      const [rows, fields] = await db.query(query, [state]);

      res.json(rows);
  } catch (error) {
      console.error('Error fetching Management colleges by state:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
