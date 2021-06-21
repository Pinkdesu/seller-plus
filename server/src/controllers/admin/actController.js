/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Act } = require('../../models/adminPanel');

class ActController {
  async create(req, res, next) {
    try {
      const {
        projectId,
        number,
        submissionDate,
        description
      } = req.body;
      const { document } = req.files;
      const fileName = moveFile(document, 'acts');

      const act = await Act.create({
        projectId,
        number,
        submissionDate,
        description,
        document: fileName
      });

      return res.json({ act });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const acts = await Act.findAll();

      return res.json({ acts });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ActController();
