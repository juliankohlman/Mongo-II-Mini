const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

require('../Authors/AuthorModel.js');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  // use ref to avoid making copies and lots of changes?
  authors: [{ type: ObjectId, ref: 'Author' }],
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
