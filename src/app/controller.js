
class Controller {
  constructor(model) {
    this.model = model;
  }

  async create(req, res, next) {
    const { body } = req;
    const result = await this.model.create(body);
    res.send(result);
    next();
  }

  async getOne(req, res, next) {
    const { params } = req;
    const result = await this.model.findById(Number(params.id));
    res.send(result);
    next();
  }

  async getAll(req, res, next) {
    const result = await this.model.findAll();
    res.send(result);
    next();
  }

  async update(req, res, next) {
    const { body, params } = req;
    const result = await this.model.update(params.id, body);
    res.send(result);
    next();
  }

  async delete(req, res, next) {
    const { params } = req;
    const model = await this.model.findById(Number(params.id));
    const result = await this.model.destroy(model);
    res.send(result);
    next();
  }
}

module.exports = Controller;
