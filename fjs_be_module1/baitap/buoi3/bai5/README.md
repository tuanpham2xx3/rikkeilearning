### Danh sách Endpoint & Middleware
| Method | Endpoint | Middleware | Mô tả |
|---|---|---|---|
| GET | /api/posts | Không | Lấy danh sách bài viết |
| GET | /api/posts/:id | Không | Chi tiết bài viết + comments |
| POST | /api/posts | authenticate, uploadThumbnail | Đăng bài kèm ảnh |
| DELETE | /api/posts/:id | authenticate, authorize('admin') | Xóa bài + cascade xóa comment |
| POST | /api/comments | authenticate | Viết bình luận vào post |

### 5 Kịch bản test
1. `DELETE /api/posts/1` không gửi header -> Trả về `401` ("Chưa đăng nhập").
2. `DELETE /api/posts/1` gửi `Authorization: user` -> Trả về `403` ("Không đủ quyền truy cập").
3. `DELETE /api/posts/1` gửi `Authorization: admin` -> Trả về `200` (Xóa bài #1 và tự cascade xóa 2 comments liên quan).
4. `POST /api/comments` với `postId: 999` -> Trả về `404` ("Không tìm thấy bài viết").
5. `POST /api/posts` gửi file ảnh hợp lệ -> Trả về `201` (Tạo bài viết thành công, lưu thumbnail).
