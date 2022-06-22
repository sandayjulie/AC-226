const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://userNovo:FIAPTEC@fiaptecnico.wakoq.mongodb.net/todo_list')
}

module.exports = conn