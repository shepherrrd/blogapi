const pool = require("../database/index")
async function getByID(res,req){
    try {
    const {id} = req.params
    const [row,fields] = await pool.query("select * from blog where id = ?", [id])
    res.json(
        {data : row})
} catch (error) {
    console.log(error)
    
}
}
module.exports = getByID
