const Controller = require('./controller');

module.exports = ({ router, model }) => {
    console.log(model)
    const controller = new Controller(model);

    router.post('/', controller.create);
    router.get('/', controller.getAll);
    router.get('/:id', controller.getOne);
    router.put('/', controller.update);
    router.delete('/', controller.delete);

    return router;
};