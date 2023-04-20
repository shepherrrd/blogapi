const pool = require("../database/index")
async function deletef(req,res) {
    try {
        const {id} = req.params
        const [row,fields] = await pool.query("delete from blog where id = ?", [id])
        res.json(
            {data : row})
    } catch (error) {
        console.log(error)
        
    }
}
module.exports = deletef