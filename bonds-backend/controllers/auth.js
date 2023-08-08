const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  const isAdmin = req.body.isAdmin;
  
  User.findOne({ email: email }).then(user => {
    if (user) {
      const err = new Error('Email already exists');
      err.statusCode = 403;
      return next(err);
    } else {
      bcrypt.hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            name: name,
            password: hashedPassword,
            isAdmin: isAdmin
          });
          return user.save();
        })
        .then(result => {
          const token = jwt.sign(
            {
              email: result.email,
              userId: result._id.toString()
            },
            'secretKey',
            { expiresIn: '100h' }
          );
          res.status(201).json({
            message: "User Created",
            userId: result._id,
            token: token,
            userEmail: email,
            userName: name,
            isAdmin: isAdmin
          });
        })
        .catch(err => {
          next(err);
        })
    }
  })
}

exports.signin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        const error = new Error("A user with this email could not be found!");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error("Wrong Password!");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString()
        },
        'secretKey',
        { expiresIn: '100h' }
      );
      res.status(200).json({
        token: token,
        userId: loadedUser._id.toString(),
        userName: loadedUser.name,
        userEmail: loadedUser.email,
        isAdmin: loadedUser.isAdmin
      });
    })
    .catch(err => {
      next(err);
    })
}

exports.verifyToken = (req, res, next) => {
  const token = req.body.token;
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, 'secretKey');
    res.json({ message: "Token verified." });
  } catch (error) {
    const err = new Error("Token expired. Please sign in again to continue");
    err.statusCode = 401;
    next(err);
  }
}

exports.getUsers = (req, res, next) => {
  User.find({isAdmin: false}).then((users) => {
    res.status(200).json(users);
  })
}

exports.getAllUsers = (req, res, next) => {
  User.find({}).then((users) => {
    res.status(200).json(users);
  })
}

exports.getUserById = (req, res, next) => {
  const id = req.body.id;
  if (!id) {
    const err = new Error("id is required!");
    next(err);
  }
  const whereObj = {
    _id: id
  };
  User.find({whereObj}).then((users) => {
    res.status(200).json(users);
  })
}