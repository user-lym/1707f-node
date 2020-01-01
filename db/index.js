const mysql = require('mysql')

module.exports=()=> {
    //1.创建连接对象
    let connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user:"root",
        password:"root",
        database:"user"
    })

    //连接数据库
    connection.connect((error)=>{
        if(error){
            console.log("连接失败");
        }else{
            console.log("连接成功");
        }
    })

    //操作数据库  (增删改查) 异步操作

    return new Promise((reslove,reject)=>{
        connection.query('select * from userlist',(error,data)=>{
            if(error){
                reject(error)
            }else{
                reslove(data)
            }
            //必须关闭连接
            connection.end()
        })
    })
}