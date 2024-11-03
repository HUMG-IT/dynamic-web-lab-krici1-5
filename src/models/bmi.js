/**
 * Tính chỉ số BMI dựa trên cân nặng và chiều cao.
 * 
 * @param {number} weight - Cân nặng (kg).
 * @param {number} height - Chiều cao (cm).
 * @returns {string} - Chỉ số BMI với 2 chữ số thập phân.
 */
function calculateBMI(weight, height) {
    // Tính chỉ số BMI theo công thức và giới hạn 2 chữ số thập phân
    let bmi = weight / Math.pow(height / 100, 2);
    return bmi.toFixed(2); // Đảm bảo kết quả được giới hạn ở 2 chữ số thập phân
}

/**
 * Phân loại chỉ số BMI.
 * 
 * @param {number} bmi - Chỉ số BMI.
 * @returns {string} - Phân loại theo chỉ số BMI.
 */
function classifyBMI(bmi) {
    bmi = parseFloat(bmi); // Chuyển đổi chuỗi thành số thực
    if (bmi < 18.5) {
        return "Gầy"; // Phân loại "Gầy"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Bình thường"; // Phân loại "Bình thường"
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Thừa cân"; // Phân loại "Thừa cân"
    } else {
        return "Béo phì"; // Phân loại "Béo phì"
    }
}

// Xuất các hàm để sử dụng
module.exports = { calculateBMI, classifyBMI };

