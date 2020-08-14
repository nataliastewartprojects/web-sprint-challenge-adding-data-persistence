const db = require("../connection");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("task");
}

function findById(id) {
  if (id) {
    return db("task").where({ id }).first();
  } else {
    return null;
  }
}

async function add(addedTask) {
  const [id] = await db("task").insert(addedTask);
  return findById(id);
}
