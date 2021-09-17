const db = require('../src/models');
const Role = db.role;
/**
 * Make any changes you need to make to the database here
 */
async function up () {
  // Write migration here
  await Role.create({name: 'Admin'});
  // await Role.createCollection({name: 'User'});
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {
  // Write migration here
}

module.exports = { up, down };
