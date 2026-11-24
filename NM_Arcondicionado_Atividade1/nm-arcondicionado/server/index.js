import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    empresa: 'N&M Arcondicionado',
    mensagem: 'API funcionando corretamente.',
    dataHora: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`API da N&M Arcondicionado disponível em http://localhost:${PORT}`);
});
