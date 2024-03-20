const mongoose = require('mongoose');

const quizesSchema = mongoose.Schema({
        question: {
            type: String,
            required: true
        },
        options: {
            type: [String],
            required: true
        },
        answer:{
            type:String,
            required : true   // only one correct option can be selected
        },
        type:{
            type: String,  // single or multiple
            default:'single',
            
            required:true
        }
})


module.exports = mongoose.model("quize", quizesSchema)