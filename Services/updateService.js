const pool = require("../database/index")
async function update(req,res){
    try {
        const {id} = req.params
        const {content,title} = req.body
        const sql = "update blog set `content` = ? , `title` = ? where id = ?"
        const [row,fields] = await pool.query(sql, [content,title,id])
        res.json(
            {data : row})
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = update