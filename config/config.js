require('dotenv').config();
const dbUser = process.env.DB_USERNAME;
const dbPasswd = process.env.DB_PASSWORD;

const dbCreds = {
  dev: {
    dbUser,
    dbPasswd
  },
  prod: {},
  test: {}
};

module.exports = dbCreds;
