import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server buoi7/bai3 đang chạy tại http://localhost:${PORT}`);
});
