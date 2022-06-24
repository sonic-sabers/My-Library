const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const {jwtKey} = require('./Keys');

router.post('/signup', async (req, res) => {
  const {userName, pw} = req.body;
  try {
    const user = new User({userName, pw});
    await user.save();
    const token = jwt.sign({userId: user._id}, jwtKey);
    res.send({token});
  } catch (err) {
    // console.log(err);
    return res.status(422).send(err.message);
    //   console.log(req.body);
  }
});

router.post('/signin', async (req, res) => {
  const {userName,pw} = req.body;
  if (!userName||!pw) {
    return res.status(422).send({error: 'must provide email or password 1'});
  }
  const user = await User.findOne({userName});
  if (!user) {
    return res.status(422).send({error: 'must provide email or password 2'});
  }
  try {
    await user.comparePassword(pw);
    const token = jwt.sign({userId: user._id}, jwtKey);
    res.send({token});
  } catch (err) {
    return res.status(422).send({error: 'must provide email or password 3'});
  }
});
module.exports = router;
//g
// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = mongoose.model('User');
// const jwt = require('jsonwebtoken');
// const {jwtKey} = require('../Keys');

// //bjjh
// router.post('/signup', async (req, res) => {
//   const {userName, pw} = req.body;
//   try {
//     const user = new User({userName, pw});
//     await user.save();
//     const token =jwt.sign({userId:user._id},jwtKey)
//     res.send({token});

//   } catch (err) {
//     console.log(err);
//     res.status(422).send(err.message)
//     //   console.log(req.body);fd
//   }
// });

// module.exports = router;
// //g
