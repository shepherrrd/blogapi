const pool = require("../database/index")

 async function getall(req,res) {
    try {
        const [row,fields] = await pool.query("select * from blog")
        res.json(
            {data : row})
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = getall
