import express from 'express';
import { versionResolver } from './middlewares/versionResolver.js';
import { rawBooks } from './data/books.js';

const app = express();
app.use(express.json());

// Gắn middleware phân giải version từ header
app.use(versionResolver);

app.get('/api/books', (req, res) => {
  const version = req.apiVersion;

  if (version === 'v1') {
    // Thêm các header Deprecation theo chuẩn RFC
    res.set('Deprecation', 'true');
    res.set('Sunset', 'Wed, 31 Dec 2025 23:59:59 GMT');

    const formatted = rawBooks.map((b) => ({
      id: b.id,
      title: b.title,
      author: b.authorName
    }));

    return res.status(200).json({
      success: true,
      version: 'v1',
      data: formatted
    });
  }

  if (version === 'v2') {
    const formatted = rawBooks.map((b) => ({
      id: b.id,
      title: b.title,
      author: {
        id: b.authorId,
        name: b.authorName
      },
      publishedYear: b.publishedYear
    }));

    return res.status(200).json({
      success: true,
      version: 'v2',
      data: formatted
    });
  }

  // Version không được hỗ trợ
  return res.status(400).json({
    success: false,
    code: 'UNSUPPORTED_API_VERSION',
    message: `Phiên bản API "${version}" không được hỗ trợ. Chỉ hỗ trợ v1 hoặc v2.`
  });
});

export default app;
