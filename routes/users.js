             const express = require('express');
             const router = express.Router();

              const passport = require('passport');

               const jwt = require('jsonwebtoken');

                const config = require('../config/database');
              const User = require('../models/user');
User = new User ({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
        password: req.body.password
      });

      User.addUser(newUser, (err,

    router.post('/register', (req, res, next) => {
      let new user) => {
             if(err) {
               res.json({success: false, msg: 'Failed to register user'});
             } else {
               res.json({success: true, msg: 'User registered'});
        }ate', (req, res, next) => {
              const username = req.body.username;
           const password = req.body.password;

          User.getUserByUsername(username, (err, user) => {
            if(err) throw err;
            if(!user) {
              ret
      });
    });


          router.post('/authenticurn res.json({success: false, msg: 'User not found'});
            } user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return reif(err) throw err;
               if(isMatch) {
             const token = jwt.sign({data: user}, config.secret, {
               expiresIn: 604800 
             });
             res.json({

        User.comparePassword(password, user.password, (err, isMatch) => {
               
          user: {
            id: user._id,
            name:
               success: true,
               token: 'JWT '+token,s.json({success: false, msg: 'Wrong password'});
            }
          });
        });
      });('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
        res.json({user: req.user});
      });

       module.exports = router


        router.get;
