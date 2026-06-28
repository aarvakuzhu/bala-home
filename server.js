const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// All static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Root → index.html (express static handles this but explicit fallback)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Another plan
app.get('/another', (req, res) => res.redirect('/another/'));
app.get('/another/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'another', 'index.html'));
});

// Health check for Render
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'bala-home', version: '2.0.0' });
});

app.listen(PORT, () => {
  console.log(`bala-home v2 running on port ${PORT}`);
  console.log(`Structure: index.html + /css + /js + /tabs (lazy-loaded)`);
});
