const mongoose = require("mongoose");
const bcrypt         = require("bcrypt");
const bcryptSalt     = 19;
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  secret: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
      return next();
  }
  bcrypt.genSalt(bcryptSalt)
      .then(salt => {
          bcrypt.hash(user.password, salt)
              .then(hash => {
                  user.password = hash;
                  next();
              })
      })
      .catch(error => next(error));
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;