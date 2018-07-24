const Sequelize = require('sequelize');
const {
  database: {
 host, user, password, dialect, database 
},
} = require('../config');
const { model } = require('./model');

module.exports = async () => {
  const sequelize = new Sequelize(database, user, password, {
    host,
    dialect,
  });

  const test = model(sequelize);

  const models = {
    test,
  };

  Object.keys(models).forEach((name) => {
    if (models[name].associate) {
      models[name].associate(models);
    }
  });

  await sequelize
    .sync({
      force: false,
      logging: process.env.NODE_ENV !== 'test',
    })
    .catch(console.error);

  return {
    Sequelize,
    sequelize,
    models,
  };
};
