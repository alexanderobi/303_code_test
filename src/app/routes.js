const Controller = require('./controller');

module.exports = ({ router, model }) => {
  const controller = new Controller(model);

  router.post('/', controller.create.bind(controller));
  router.get('/', controller.getAll.bind(controller));
  router.get('/:id', controller.getOne.bind(controller));
  router.put('/:id', controller.update.bind(controller));
  router.delete('/:id', controller.delete.bind(controller));

  return router;
};
