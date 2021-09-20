const db = require("../models");
const {dbConfig} = require('../config');
const Role = db.role;

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


function initial() {
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
    }
  });
}

module.exports = {db, initial};