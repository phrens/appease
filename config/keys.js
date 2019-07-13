const dbCreds = require('./config');
module.exports = {
  mongoURI: `mongodb+srv://${dbCreds.dev.dbUser}:${
    dbCreds.dev.dbPasswd
  }@tujue-app-cluster-tyubi.mongodb.net/test?retryWrites=true&w=majority`
};
