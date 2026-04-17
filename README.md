# Book Store Web

## Tổng quan

Book Store Web là một dự án website bán sách gồm hai phần tách riêng:

- `FE`: frontend viết bằng React và Vite
- `BE`: backend viết bằng PHP, xử lý dữ liệu sản phẩm, yêu thích, giỏ hàng và trang quản trị

Ứng dụng hiện hỗ trợ các luồng chính như xem danh sách sách theo danh mục, xem chi tiết sản phẩm, thêm vào yêu thích, thêm vào giỏ hàng và quản lý dữ liệu từ trang admin.

## Cấu trúc thư mục

```text
book_store_web/
├─ FE/
│  ├─ public/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ config/
│  │  └─ assets/
│  ├─ package.json
│  └─ vite.config.js
├─ BE/
│  ├─ database/
│  │  └─ tiem_sach.sql
│  └─ php/
│     ├─ admin/
│     ├─ catalog/
│     ├─ core/
│     ├─ favorites/
│     └─ store/
└─ README.md
```

## Công nghệ sử dụng

### Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Swiper
- jQuery
- Font Awesome
- DnD Kit

### Backend

- PHP
- MySQL
- PDO
- MySQLi

## Backend được chia theo chức năng

### `BE/php/core`

Chứa phần kết nối cơ sở dữ liệu.

### `BE/php/catalog`

Chứa các API lấy danh sách sản phẩm, chi tiết sản phẩm, dữ liệu theo danh mục và tìm kiếm.

### `BE/php/favorites`

Chứa các API liên quan đến danh sách yêu thích.

### `BE/php/store`

Chứa các API liên quan đến giỏ hàng.

### `BE/php/admin`

Chứa các API thêm, sửa, xóa sản phẩm và đổi trạng thái trong khu vực quản trị.

## Cấu hình API frontend

Frontend đang dùng file:

- [FE/src/config/api.js](</e:/book_store_web/FE/src/config/api.js>)

Nếu thay đổi domain, port hoặc thư mục deploy, chỉ cần cập nhật lại file này.

## Cơ sở dữ liệu

File SQL nằm tại:

- [BE/database/tiem_sach.sql](</e:/book_store_web/BE/database/tiem_sach.sql>)

Cấu hình kết nối database hiện nằm trong:

- [BE/php/core/Dbconnect.php](</e:/book_store_web/BE/php/core/Dbconnect.php>)

Tên database đang dùng là `tiem_sach`.

## Cách chạy dự án

### Chuẩn bị backend

- cài PHP
- cài MySQL
- import file `BE/database/tiem_sach.sql`
- cấu hình web server để truy cập được thư mục `BE/php`

Ví dụ đường dẫn backend:

```text
https://localhost/book_store_web/BE/php
```

### Chạy frontend

```bash
cd FE
npm install
npm run dev
```

### Build frontend

```bash
cd FE
npm install
npm run build
```

## Ghi chú

- Ảnh sản phẩm hiện vẫn được frontend sử dụng trực tiếp từ thư mục asset nội bộ.
- Một số file và tên endpoint ở backend vẫn đang giữ cách đặt tên cũ để tránh phải sửa quá nhiều logic đang chạy.
- Backend hiện vẫn còn trộn cả `PDO` và `MySQLi`. Nếu làm tiếp, nên thống nhất về một kiểu truy cập database.

## Hướng phát triển tiếp theo

- chuẩn hóa tên endpoint và tên file PHP
- tách backend theo lớp `controller/service/repository`
- thêm file `.env` cho frontend và backend
- viết thêm hướng dẫn deploy cho Apache hoặc Nginx
- bổ sung kiểm thử và script build rõ ràng hơn
