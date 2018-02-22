const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    index: true,
    // lowercase: true
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
  createdOn: { type: Date, default: Date.now },
  //{ runSettersOnQuery: true} prevents data update, and need to repopulate
});

// viruals
// precalculations on data
// not saved on db

/*
AuthorSchema.virtual('fullName')
  //getter and setter
  .get(() => {
    ALWAYS WORKING WITH THIS
    return `${this.firstName} ${this.lastName}`;
  }) // getting data
  .set() // saving data
*/
module.exports = mongoose.model('Author', AuthorSchema);
