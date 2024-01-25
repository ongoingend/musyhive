const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');


mongoose.connect('mongodb+srv://techiehuman:YfaLyK9QgmWkuluh@cluster0.ha59luk.mongodb.net/?retryWrites=true&w=majority');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // Assuming the profile picture is stored as a URL
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;
