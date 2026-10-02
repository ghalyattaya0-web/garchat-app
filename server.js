import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 3000;

const defaultHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Garchat - Android & Web App</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: #0b141a;
      color: #e9edef;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      text-align: center;
    }
    .card {
      background: #111b21;
      border: 1px solid #222e35;
      border-radius: 1rem;
      padding: 2.5rem 2rem;
      max-width: 520px;
      width: 100%;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
    .badge {
      display: inline-block;
      background: rgba(0, 168, 132, 0.15);
      color: #00a884;
      border: 1px solid #00a884;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
    }
    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
      color: #ffffff;
    }
    p {
      color: #8696a0;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .step-box {
      background: #202c33;
      border: 1px solid #2a3942;
      border-radius: 0.75rem;
      padding: 1.25rem;
      text-align: left;
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
    }
    .step-box strong {
      color: #00a884;
      display: block;
      margin-bottom: 0.5rem;
    }
    .step-box ol {
      padding-left: 1.25rem;
      color: #d1d7db;
    }
    .step-box li {
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }
    .step-box code {
      background: #111b21;
      padding: 0.15rem 0.4rem;
      border-radius: 0.25rem;
      color: #53bdeb;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Android Project Siap</div>
    <h1>Garchat</h1>
    <p>Aplikasi Android Garchat telah dikonfigurasi lengkap dengan workflow otomatis GitHub Actions untuk build debug APK.</p>
    <div class="step-box">
      <strong>Langkah Selanjutnya:</strong>
      <ol>
        <li>Publish/push proyek ini ke GitHub.</li>
        <li>GitHub Actions akan otomatis melakukan build APK.</li>
        <li>Kirim nama repositori (format: <code>username/repository-name</code>) ke chat ini untuk mendapatkan link download langsung.</li>
      </ol>
    </div>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(defaultHtml);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Garchat dev server running on port ${PORT}`);
});
