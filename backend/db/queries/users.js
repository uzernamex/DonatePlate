const db = require("../connection");

const getUsers = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getFoodDonations = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};
const getAddress = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

const getMessages = () => {
  return db.query("SELECT * FROM users;").then((data) => {
    return data.rows;
  });
};

module.exports = { getUsers, getAddress, getMessages, getFoodDonations };
