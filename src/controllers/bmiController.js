// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

/**
 * Hàm `getBMI`
 * 
 * Hàm này xử lý yêu cầu POST từ client để tính toán chỉ số BMI,
 * trả về chỉ số BMI cùng với phân loại của nó.
 * 
 * @function getBMI
 * @param {Object} req - Đối tượng request từ client, chứa chiều cao và cân nặng trong `req.body`.
 * @param {Object} res - Đối tượng response để gửi phản hồi JSON về cho client.
 * 
 * @example
 * // Yêu cầu từ client:
 * // POST /bmi
 * // Body: { "height": 170, "weight": 70 }
 * 
 * // Phản hồi:
 * // {
 * //   "bmi": "24.22",
 * //   "classification": "Bình thường"
 * // }
 */
const getBMI = (req, res) => {
    const { height, weight } = req.body; // Lấy chiều cao và cân nặng từ yêu cầu

    // Kiểm tra nếu không có chiều cao hoặc cân nặng
    if (!height || !weight) {
        return res.status(400).json({ message: 'Vui lòng cung cấp cả chiều cao và cân nặng.' });
    }

    // Tính chỉ số BMI
    const bmi = calculateBMI(weight, height);
    // Phân loại chỉ số BMI
    const classification = classifyBMI(bmi);

    // Trả về JSON chứa bmi và classification
    res.json({ bmi, classification });
};

// Xuất hàm getBMI
module.exports = { getBMI };

