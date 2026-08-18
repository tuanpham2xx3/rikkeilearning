import app from './app.js';
import { initDb } from './models/index.js';

const PORT = process.env.PORT || 3000;

async function start() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`Server buoi5/bai4 đang chạy tại http://localhost:${PORT}`);
  });
}

start();
