const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema(
  {
    userName: {type: String, unique: true, required: true},
    pw: {type: String},
    token: {type: String},
  },
  //   {timestamp: true},
);

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('pw')) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.pw, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.pw = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.pw, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(err);
      }
      resolve(true);
    });
  });
};

mongoose.model('User', userSchema);
