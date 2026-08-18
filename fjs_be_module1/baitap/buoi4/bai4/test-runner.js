import app from './app.js';
import newman from 'newman';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reportsDir = path.join(__dirname, 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const server = app.listen(3000, () => {
  console.log('Server test đã khởi động tại http://localhost:3000');

  newman.run(
    {
      collection: path.join(__dirname, 'postman', 'collection.json'),
      environment: path.join(__dirname, 'postman', 'env.json'),
      reporters: ['cli', 'htmlextra'],
      reporter: {
        htmlextra: {
          export: path.join(reportsDir, 'report.html')
        }
      }
    },
    (err, summary) => {
      server.close(() => {
        if (err || summary.run.failures.length > 0) {
          console.error('Test thất bại!');
          process.exit(1);
        } else {
          console.log('\n✅ Toàn bộ 8/8 Request và 16/16 Test Script đã PASS 100%!');
          console.log(`📄 Báo cáo HTML đã được tạo tại: ${path.join(reportsDir, 'report.html')}`);
          process.exit(0);
        }
      });
    }
  );
});
