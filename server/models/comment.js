var mongoose = require('mongoose') 
var Schema = mongoose.Schema

var commentSchema = new Schema({
    name: {type: String, required: true},
    email: String,
    created_at: Date,
    comment: String
})

commentSchema.pre('save', function(next) {
    this.created_at = new Date() 
    next()
})

module.exports = mongoose.model('Comment', commentSchema)
