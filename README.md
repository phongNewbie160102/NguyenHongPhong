# Code Challenge - Nguyen Hong Phong

## 🏗 Cấu trúc thư mục

- `problem1/vanilla-js/`: Bài toán 1 (Vanilla JavaScript)
- `problem2/vuejs/`: Bài toán 2 (Vue.js)
- `problem3/reactjs/`: Bài toán 3 (React.js)

# PROBLEM 1: Giải thích các phương pháp
✅ Phương pháp 1: Công thức Gauss
Sử dụng công thức:
S = N * (N + 1) / 2,
Ưu điểm: Chạy nhanh nhất, độ phức tạp O(1).
Nhược điểm: Không hiển thị được từng bước tính toán.
✅ Phương pháp 2: Dùng vòng lặp for
Khởi tạo biến sum = 0.
Duyệt từ 1 đến N, cộng dồn vào sum.
Độ phức tạp O(N).
Hiển thị được từng bước tính toán.
✅ Phương pháp 3: Dùng đệ quy
Nếu N = 1, trả về 1.
Nếu N > 1, trả về N + sum(N - 1).
Độ phức tạp O(N) nhưng tốn bộ nhớ vì gọi hàm liên tục.

# PROBLEM 2: Ứng dụng Quy đổi Tiền tệ
Mô tả
Ứng dụng quy đổi tiền tệ cho phép người dùng nhập số tiền, chọn quốc gia nguồn và quốc gia đích để xem số tiền sau khi quy đổi theo tỷ giá hiện tại.
Tính năng chính
Nhập số tiền cần quy đổi.
Chọn quốc gia nguồn và quốc gia đích với danh sách quốc gia từ API.
Tự động lấy mã tiền tệ dựa vào quốc gia được chọn.
Hiển thị tỷ giá quy đổi và số tiền sau khi chuyển đổi.
Cập nhật thông tin tỷ giá mới nhất từ API.
Công nghệ sử dụng
Vue 3 (Composition API): Quản lý trạng thái và xử lý logic.
Ant Design Vue: Tạo giao diện hiện đại và thân thiện với người dùng.
Axios: Gửi yêu cầu API để lấy dữ liệu quốc gia và tỷ giá.
REST Countries API: Lấy danh sách quốc gia.
Exchange Rate API: Lấy tỷ giá hối đoái theo thời gian thực.


# PROBLEM 3: WalletPage Component
 📌 Giới thiệu
`WalletPage` là một React component hiển thị danh sách số dư ví tiền điện tử của người dùng, được lấy từ một API thông qua hooks `useWalletBalances` và `usePrices`. Danh sách này được sắp xếp theo mức độ ưu tiên của từng blockchain.

- 📦 Tính năng chính
- 📊 **Lấy số dư ví**: Dữ liệu ví được lấy từ hook `useWalletBalances()`.
- 💰 **Tính giá trị USD**: Giá trị USD của từng loại tiền được tính từ `usePrices()`.
- 🔄 **Sắp xếp blockchain**: Ưu tiên hiển thị các blockchain quan trọng như `Osmosis`, `Ethereum`, v.v.
- 🎨 **Hiển thị danh sách**: Danh sách số dư được hiển thị theo định dạng dễ đọc.
- 🏗 **Tách component**: Sử dụng `WalletRow` để hiển thị từng dòng.
