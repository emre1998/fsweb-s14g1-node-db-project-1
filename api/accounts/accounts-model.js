const db = require("../../data/db-config");

const getAll = async (limit,sortBy,sortDir) => {
  limit = limit || await db("accounts").length;
  sortBy = sortBy || "id";
  sortDir = sortDir || "asc";
  return db("accounts").orderBy(sortBy,sortDir).limit(limit);
};

const getById = id => {
  // KODLAR BURAYA
  //default select için return array formatındadır. First yapınca object {} formatında dönüyor.
  return db("accounts").where("id",id).first();
};

const create = async (account) => {
  // KODLAR BURAYA
  const inserted = await db("accounts").insert(account);
  return getById(inserted[0]);
};

const updateById = async (id, account) => {
  // KODLAR BURAYA
  await db("accounts").where("id",id).update(account);
  return getById(id);
};

const deleteById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where("id",id).del();
};

const getByName = (name)=>{
  return db("accounts").where("name",name).first();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName,
}
