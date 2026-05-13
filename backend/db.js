const mysql=require('mysql2');
const connection=mysql.createConnection(
    {
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database:process.env.MYSQLDATABASE,
    port:process.env.MYSQLPORT
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
    