const pool = require("../database/index")
const getservice = require("../Services/getAllService")
const getbyIdservice = require("../Services/getByIdService")
const createService = require("../Services/createService")
const updateService = require("../Services/updateService")
const deleteService = require("../Services/deleteService")
const postController = {

    getAll : async (req,res) =>{
        await getservice(req,res)
    },
    getByID : async(req,res) =>{
        await getbyIdservice(res,req)
    },
    create : async (req,res) =>{
        await createService(req,res)
    },
    update : async (req,res) =>{
        await updateService(req,res)
    },
    delete : async (req,res) =>{
        await deleteService(req,res)
    }
}
module.exports = postController