          const mongoose = require('mongoose');


             const bcrypt = require('bcryptjs');
          const config = require('../config/database');


                  const UserSchema = mongoose.Schema ({
                  name: {
                       type: String
                  },
                  email: {
                    type: String,
                      required: true
                  },

      const User = module.exports = mongoose.model('User', UserSchema);

         assword, salt, (err, hash) => {
              if(err) throw err;
              newUser.password = h
                  username: {
                             type: String,
                          required: true
                          },
          password: {
            type: String,
            required: true
          }
        });ash; module.exports.getUserById = function(id, callback) {
      User.findById(id, callback);
    }ts.addUser = function(newUser, callback) {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.p
              newUser.save(callback);
            });
          });
        }

        module.exports.comparePassword = function(candidatePassword, hash, callback) {
            bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;

            module.exports.getUserByUsername = function(username, callback) {
          const query = {username: username}
          User.findOne(query, callback);
        }

      callback(null, isMatch);
        module.expor
    });
  }
