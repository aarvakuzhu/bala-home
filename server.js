const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Root → floor plan
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home_plan_v7.html'));
});

// Health check for Render
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'bala-home', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`bala-home running on port ${PORT}`);
});
