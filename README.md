# Book Store Web

## Tổng quan

`Book Store Web` là dự án web bán sách gồm 2 phần tách biệt:

- `FE`: giao diện người dùng viết bằng React + Vite
- `BE`: backend PHP xử lý dữ liệu, giỏ hàng, yêu thích và quản trị

Hệ thống hiện phục vụ các chức năng chính:

- hiển thị danh sách sách theo danh mục
- xem chi tiết sản phẩm
- thêm sản phẩm vào danh sách yêu thích
- thêm sản phẩm vào giỏ hàng
- quản trị sản phẩm bằng giao diện admin
- đọc và cập nhật dữ liệu từ MySQL

## Cấu trúc thư mục

```text
book_store_web/
├─ FE/                  # Frontend React + Vite
│  ├─ public/
│  ├─ src/
│  │  ├─ components/    # UI và logic giao diện hiện tại
│  │  ├─ config/        # Cấu hình API frontend
│  │  └─ assets/
│  ├─ package.json
│  └─ vite.config.js
├─ BE/                  # Backend PHP
│  ├─ database/
│  │  └─ tiem_sach.sql  # Cấu trúc và dữ liệu mẫu database
│  └─ php/
│     ├─ admin/         # Thêm, sửa, xóa, đổi trạng thái sản phẩm
│     ├─ catalog/       # API danh mục, tìm kiếm, lấy dữ liệu sản phẩm
│     ├─ favorites/     # API yêu thích
│     ├─ store/         # API giỏ hàng
│     └─ core/          # Kết nối database
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
- PDO và MySQLi

## Cấu trúc backend theo chức năng

### `BE/php/core`

- `Dbconnect.php`: kết nối cơ sở dữ liệu

### `BE/php/catalog`

- lấy danh sách sản phẩm
- lấy chi tiết sản phẩm
- lọc dữ liệu theo trạng thái
- tìm kiếm sản phẩm
- endpoint theo từng danh mục sách

### `BE/php/favorites`

- thêm sản phẩm vào yêu thích
- xóa sản phẩm khỏi yêu thích
- lấy danh sách yêu thích
- kiểm tra trạng thái yêu thích

### `BE/php/store`

- thêm sản phẩm vào giỏ hàng
- xóa sản phẩm khỏi giỏ hàng
- lấy một sản phẩm trong giỏ
- lấy toàn bộ giỏ hàng

### `BE/php/admin`

- thêm sản phẩm mới
- cập nhật sản phẩm
- xóa sản phẩm
- thay đổi trạng thái hiển thị

## Cấu hình API frontend

Frontend đang cấu hình đường dẫn API tại:

- [FE/src/config/api.js](</e:/book_store_web/FE/src/config/api.js>)

Các nhóm endpoint chính:

- `API_ADMIN_URL`
- `API_CATALOG_URL`
- `API_FAVORITES_URL`
- `API_STORE_URL`

Nếu thay đổi domain, port hoặc thư mục deploy, cần cập nhật file này trước.

## Cơ sở dữ liệu

File database nằm tại:

- [BE/database/tiem_sach.sql](</e:/book_store_web/BE/database/tiem_sach.sql>)

Tên database hiện tại trong mã nguồn backend:

- `tiem_sach`

Cấu hình kết nối đang nằm trong:

- [BE/php/core/Dbconnect.php](</e:/book_store_web/BE/php/core/Dbconnect.php>)

## Cách chạy dự án

### 1. Chuẩn bị backend

- cài PHP
- cài MySQL
- import file `BE/database/tiem_sach.sql`
- cấu hình web server để truy cập được thư mục `BE/php`

Ví dụ backend được truy cập tại:

```text
https://localhost/book_store_web/BE/php
```

### 2. Chạy frontend

Di chuyển vào thư mục `FE`:

```bash
cd FE
npm install
npm run dev
```

### 3. Build frontend

```bash
cd FE
npm install
npm run build
```

## Ghi chú triển khai

- frontend hiện vẫn còn một số component đặt tên theo cấu trúc cũ, nhưng đã được tách vật lý khỏi backend
- ảnh sản phẩm hiện đang được frontend sử dụng trực tiếp từ thư mục asset nội bộ
- backend PHP đã được chia lại theo chức năng, nhưng tên file endpoint vẫn giữ gần với hệ thống cũ để giảm rủi ro lỗi tương thích
- một số API cũ dùng cả `PDO` và `MySQLi`; nếu muốn chuẩn hóa tiếp, nên gom toàn bộ về một kiểu truy cập database

## Hướng phát triển tiếp theo

- chuẩn hóa tên endpoint và tên file PHP
- tách backend theo lớp `controller/service/repository`
- thêm file `.env` cho cấu hình frontend và backend
- thêm hướng dẫn deploy riêng cho Apache hoặc Nginx
- bổ sung kiểm thử và build script hoàn chỉnh

## Trạng thái hiện tại

Dự án đã được:

- tách thành `FE` và `BE`
- dọn các file cũ không còn cần thiết ở root
- nhóm lại backend PHP theo từng chức năng chính
- cập nhật frontend để gọi đúng backend mới

Phần build chưa được xác minh trong môi trường hiện tại vì máy chưa có `vite` khả dụng tại thời điểm kiểm tra, nên cần chạy `npm install` trong `FE` trước khi build.
