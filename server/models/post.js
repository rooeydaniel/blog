/*
    The Post Model
 */

var mongoose = require('mongoose')
    ,Schema = mongoose.Schema;
//    ,ObjectId = Schema.ObjectId;

var postSchema = new Schema({
//    id: ObjectId,
    title: String,
    text: String
});

module.exports = mongoose.model('post', postSchema);