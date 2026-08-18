import app from './app.js';
import { initDb } from './models/Product.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Server buoi5/bai1 đang chạy tại http://localhost:${PORT}`);
  });
}

startServer();
