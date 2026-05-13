require('dotenv').config();
const express = require('express');
const cors=require('cors');
const db=require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/users', async (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn:', err);
            res.status(500).json({ error: 'Lỗi truy vấn' });
        } else {
            res.json(results);
        }
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});