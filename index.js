const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Kairos landing page retired (Nov 2026): send old links to the framework on the homepage
app.get(/^\/kairos(\/.*)?$/, (req, res) => res.redirect(301, '/#thinking'));

app.use(express.static('public'));

app.get('/llms.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'public', 'llms.txt'));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
