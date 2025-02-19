# Code Challenge - Nguyen Hong Phong

## 🏗 Cấu trúc thư mục

- `problem1/vanilla-js/`: Bài toán 1 (Vanilla JavaScript)
- `problem2/vuejs/`: Bài toán 2 (Vue.js)
- `problem3/reactjs/`: Bài toán 3 (React.js)

# Clone repo
git clone https://github.com/phongNewbie160102/NguyenHongPhong.git

cd NguyenHongPhong

# Cài đặt dependencies
npm install

# Chạy ứng dụng
npm run dev

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

## Hình minh họa

![image](https://github.com/user-attachments/assets/11deda1c-6aba-46a6-a0db-5b08be696565)


# PROBLEM 2: Ứng dụng Quy đổi Tiền tệ
🌍💱 Ứng dụng Quy đổi Tiền tệ
📖 Mô tả
Ứng dụng giúp bạn chuyển đổi tiền tệ dễ dàng giữa các quốc gia theo tỷ giá hối đoái mới nhất. 🚀

✨ Tính năng chính
✅ 💵 Nhập số tiền cần quy đổi.

✅ 🌍 Chọn quốc gia nguồn và quốc gia đích từ danh sách API.

✅ 🔄 Tự động lấy mã tiền tệ theo quốc gia.

✅ 📊 Hiển thị tỷ giá hối đoái và số tiền sau quy đổi.

✅ 📡 Cập nhật tỷ giá mới nhất theo thời gian thực.

🛠 Công nghệ sử dụng
🔹 Vue 3 (Composition API) – Quản lý trạng thái và xử lý logic.

🔹 Ant Design Vue – Giao diện đẹp mắt, thân thiện người dùng.

🔹 Axios – Kết nối API lấy dữ liệu tiền tệ.

🔹 REST Countries API 🌎 – Lấy danh sách quốc gia.

🔹 Exchange Rate API 💹 – Cập nhật tỷ giá hối đoái theo thời gian thực.

## Hình minh họa
![image](https://github.com/user-attachments/assets/9aa66c9e-22e4-46c4-b298-fada4125ada3)

![image](https://github.com/user-attachments/assets/a6889a65-8e13-4fc5-8bbf-f639075e540e)

![image](https://github.com/user-attachments/assets/d8efb19a-687e-4798-b938-23e68bca21d8)


# PROBLEM 3: WalletPage Component
 📌 Giới thiệu
`WalletPage` là một React component hiển thị danh sách số dư ví tiền điện tử của người dùng, được lấy từ một API thông qua hooks `useWalletBalances` và `usePrices`. Danh sách này được sắp xếp theo mức độ ưu tiên của từng blockchain.

- 📦 Tính năng chính
- 📊 **Lấy số dư ví**: Dữ liệu ví được lấy từ hook `useWalletBalances()`.
- 💰 **Tính giá trị USD**: Giá trị USD của từng loại tiền được tính từ `usePrices()`.
- 🔄 **Sắp xếp blockchain**: Ưu tiên hiển thị các blockchain quan trọng như `Osmosis`, `Ethereum`, v.v.
- 🎨 **Hiển thị danh sách**: Danh sách số dư được hiển thị theo định dạng dễ đọc.
- 🏗 **Tách component**: Sử dụng `WalletRow` để hiển thị từng dòng.

## Hình minh họa
![image](https://github.com/user-attachments/assets/4414a89b-65ef-4444-92fa-bde603a5210f)
