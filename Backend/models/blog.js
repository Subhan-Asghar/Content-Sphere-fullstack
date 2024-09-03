const mongoose=require('mongoose')
const blogSchema = new mongoose.Schema({

})
const blog =mongoose.model('blog',blogSchema)
module.exports=blog