const { Sequelize } = require('sequelize');
const faker = require('faker');

const model = (sequelize) => sequelize.define('user', {
    title: Sequelize.STRING,
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    author: Sequelize.STRING,
    content: Sequelize.STRING,
});

module.exports = {
    model,
};