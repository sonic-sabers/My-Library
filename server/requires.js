const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const {jwtKey} = require('./Keys');

module.exports = (req, res, next) => {
  const {authorization} = req.headers;
  if (!authorization) {
    return res.status(401).send({error: 'you must be login 1'});
  }
  const token = authorization.replace('Bearer ','');
  jwt.verify(token,jwtKey,async (err, payload) => {
    if (err) {
      return res.status(401).send({error: 'you must be login 2'});
    }
    const{userId}=payload;
    const user =  await User.findById(userId);
    req.user=user;   
    next();
  });
};
