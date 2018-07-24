const { Sequelize } = require('sequelize');

const model = (sequelize) => sequelize.define('test', {
    title: Sequelize.STRING,
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    author: Sequelize.STRING,
    content: Sequelize.STRING,
});


module.exports = {
    model,
};