import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// Health check endpoint for Cloud Run deployment
app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

// Serve compiled static frontend assets from dist
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for client-side routing
app.get('*', (_req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Jessica Dangol - Portfolio');
    }
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port} (0.0.0.0)`);
});
