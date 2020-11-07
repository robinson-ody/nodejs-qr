import express from 'express';
const app = express();
const PORT = 8000;
import QRCode from 'qrcode';

app.get('/api/qrcode', async (req, res) => {
  const img = await QRCode.toDataURL('Hi there! I am your first QR Code');
  res.status(200).write(img)
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
