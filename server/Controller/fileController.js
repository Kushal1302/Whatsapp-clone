import mongoose from "mongoose"
import Grid  from "gridfs-stream"

const conn = mongoose.connection;
let gfs , gridFsBucket;
conn.once('open' , () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db , {
        bucketName:'fs'
    })
    gfs = Grid(conn.db , mongoose.mongo)
    gfs.collection('fs')
})


export const getImage = async (req , res) =>{
    try {
        const file = await gfs.files.findOne({filename:req.params.filename})
    } catch (error) {
        console.log(error.message)
    }
}