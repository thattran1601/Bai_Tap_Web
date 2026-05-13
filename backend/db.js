const mysql=require('mysql2');
const connection=mysql.createConnection(
    {
    host:"localhost",
    user:"root",
    password:"",
    database:"baitap"
    }
)
connection.connect((err)=>{
    if(err)
        {
        console.log("Kết nối thất bại");
    }
    else{
        console.log("Kết nối thành công");
    }
});
module.exports=connection;
    