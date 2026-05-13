const express = require('express');
const cors=require('cors');
const db=require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/users', async (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn:', err);
            res.status(500).json({ error: 'Lỗi truy vấn' });
        } else {
            res.json(results);
        }
    });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});