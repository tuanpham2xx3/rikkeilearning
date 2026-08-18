import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server buoi4/bai1 đang chạy tại http://localhost:${PORT}`);
});
