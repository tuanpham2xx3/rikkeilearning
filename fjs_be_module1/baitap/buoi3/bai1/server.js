import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server buoi3/bai1 đang chạy tại http://localhost:${PORT}`);
});
