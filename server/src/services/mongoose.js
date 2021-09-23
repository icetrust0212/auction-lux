const db = require("../models");
const {
  dbConfig
} = require('../config');
const User = db.user;
const Role = db.role;
var bcrypt = require("bcryptjs");

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function createRoles() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "USER"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'USER' to roles collection");
      });

      new Role({
        name: "ADMIN"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'ADMIN' to roles collection");
      });

      new Role({
        name: "VENDOR"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'VENDOR' to roles collection");
      });
    }
  });
}

function createSuperAdmin() {
  User.estimatedDocumentCount((err, count) => {
    User.findOne({
      username: process.env.ADMIN_USERNAME
    }).exec((err, user) => {
      if (err) {
        console.log('faild create super admin: ', err);
        return;
      }
      if (!user) {
        Role.findOne({
          name: 'ADMIN'
        }, (err, role) => {
          if (err) {
            console.log('ADMIN role does not exists');
            return;
          }
          new User({
            username: process.env.ADMIN_USERNAME,
            password:bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8) ,
            email: process.env.ADMIN_EMAIL,
            roles: [role._id]
          }).save(err => {
            if (err) {
              console.log("error", err);
              return;
            }

            console.log("Create super admin");
          });
        })
        return;
      }
    })
  });
}

function initial() {
  createRoles();
  createSuperAdmin();
}

module.exports = {
  db,
  initial
};