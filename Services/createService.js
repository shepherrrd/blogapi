const pool = require("../database/index")
 async function create(req,res){
    try {
            
        const {title,content} = req.body
        const sql = "insert into blog (title,content) values(?,?)"
        const [row,fields] = await pool.query(sql,[title,content])
        res.json({
            data : row
        })
            
        } catch (error) {
            console.log(error)
            res.json({
                status : error
            })
        }
 }

 module.exports = create