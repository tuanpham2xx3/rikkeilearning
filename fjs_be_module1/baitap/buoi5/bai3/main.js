import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('=== BẮT ĐẦU THAO TÁC CRUD VỚI PRISMA CLIENT ===\n');

  // 1. Tạo 1 Author kèm 2 Book trong 1 lời gọi duy nhất (Nested Write)
  console.log('1. [CREATE] Tạo 1 Author kèm 2 Book (Nested Write)...');
  const author = await prisma.author.create({
    data: {
      name: 'Robert C. Martin (Uncle Bob)',
      books: {
        create: [
          { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', price: 350000 },
          { title: 'Clean Architecture: A Craftsman\'s Guide', price: 420000 }
        ]
      }
    },
    include: {
      books: true
    }
  });
  console.log('=> Đã tạo thành công:', JSON.stringify(author, null, 2));
  console.log('');

  // 2. Đọc Author kèm toàn bộ Book bằng include
  console.log('2. [READ] Lấy thông tin Author kèm danh sách Books...');
  const authorDetails = await prisma.author.findUnique({
    where: { id: author.id },
    include: {
      books: true
    }
  });
  console.log('=> Thông tin chi tiết:', JSON.stringify(authorDetails, null, 2));
  console.log('');

  // 3. Cập nhật giá một Book
  const firstBookId = author.books[0].id;
  console.log(`3. [UPDATE] Cập nhật giá sách #${firstBookId} thành 380,000đ...`);
  const updatedBook = await prisma.book.update({
    where: { id: firstBookId },
    data: { price: 380000 }
  });
  console.log('=> Sách sau khi cập nhật giá:', updatedBook);
  console.log('');

  // 4. Xóa một Book
  const secondBookId = author.books[1].id;
  console.log(`4. [DELETE] Xóa sách #${secondBookId}...`);
  const deletedBook = await prisma.book.delete({
    where: { id: secondBookId }
  });
  console.log('=> Đã xóa sách thành công:', deletedBook.title);
  console.log('');

  // 5. Bắt lỗi khi delete một id không tồn tại
  console.log('5. [ERROR HANDLING] Thử xóa sách với ID không tồn tại (#9999)...');
  try {
    await prisma.book.delete({
      where: { id: 9999 }
    });
  } catch (err) {
    if (err.code === 'P2025') {
      console.log('=> [BẮT LỖI AN TOÀN] Không tìm thấy bản ghi để xóa (Prisma Error Code: P2025). Chương trình không bị dừng đột ngột.');
    } else {
      console.error('Lỗi không xác định:', err.message);
    }
  }

  console.log('\n=== HOÀN TẤT CÁC THAO TÁC PRISMA ===');
}

main()
  .catch((e) => {
    console.error('Lỗi khi chạy main:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
