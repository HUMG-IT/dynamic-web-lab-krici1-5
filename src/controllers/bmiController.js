// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

/**
 * Hàm getBMI xử lý yêu cầu từ client
 * 
 * @param {Object} req - Đối tượng yêu cầu từ client, chứa chiều cao và cân nặng trong req.body.
 * @param {Object} res - Đối tượng phản hồi để gửi kết quả về cho client.
 */
const getBMI = (req, res) => {
    const { height, weight } = req.body;

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
