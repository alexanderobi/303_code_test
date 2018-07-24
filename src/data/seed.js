const initData = require('./database');
const faker = require('faker');

const stub = {
    title: faker.name.title(),
    author: `${faker.name.firstName()} ${faker.name.firstName()}`,
    content: faker.lorem.sentence(),
};

initData().then(async ({ models: { test } }) => {
    await Promise.all[[1,2,3,4,5,6,7,8,9,10].map(x => test.create(stub))]
})