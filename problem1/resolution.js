// Phương pháp 1: Sử dụng Công thức Gauss
var sum_to_n_a = function(n) {
    // Tính tổng các số từ 1 đến n bằng công thức Gauss
    var sum = (n * (n + 1)) / 2;

    // Hiển thị các bước tính toán
    document.getElementById("steps_a").innerHTML = `Bước 1: Sử dụng công thức Gauss: <br>
    Tổng = ${n} * (${n} + 1) / 2 = ${n} * ${n + 1} / 2 = ${sum}`;

    return sum;
};

//---------------------------------------------------------------------------------------------------//
// Phương pháp 2: Sử dụng Vòng lặp (for loop)
var sum_to_n_b = function(n) {
    let sum = 0; 
    let steps = ""; 

    // Duyệt qua từng số từ 1 đến n và cộng dồn vào sum
    for (let i = 1; i <= n; i++) {
        sum += i; 
        steps += `Bước ${i}: cộng ${i} vào tổng, tổng hiện tại = ${sum} <br>`;
    }

    // Hiển thị các bước tính toán
    document.getElementById("steps_b").innerHTML = steps;
    return sum; 
};

//---------------------------------------------------------------------------------------------------//
// Phương pháp 3: Sử dụng Đệ quy
var sum_to_n_c = function(n) {
    if (n === 1) return 1;

    // Hiển thị các bước tính toán đệ quy
    let currentStep = `Gọi hàm sum_to_n_c(${n}) = ${n} + sum_to_n_c(${n - 1}) <br>`;
    document.getElementById("steps_c").innerHTML += currentStep;
    
    return n + sum_to_n_c(n - 1); 
};

//---------------------------------------------------------------------------------------------------//
// Hàm tính toán tổng khi người dùng nhập giá trị n
function calculateSums() {
    var n = parseInt(document.getElementById("input_n").value);

    if (isNaN(n) || n < 1) {
        alert("Vui lòng nhập một giá trị n hợp lệ (n >= 1).");
        return;
    }

    // Hiển thị kết quả của cả 3 phương pháp
    document.getElementById("result_a").innerHTML = `Kết quả Phương pháp 1 (Gauss) với n = ${n}: ${sum_to_n_a(n)}`;
    document.getElementById("result_b").innerHTML = `Kết quả Phương pháp 2 (Vòng lặp) với n = ${n}: ${sum_to_n_b(n)}`;
    document.getElementById("result_c").innerHTML = `Kết quả Phương pháp 3 (Đệ quy) với n = ${n}: ${sum_to_n_c(n)}`;
}
