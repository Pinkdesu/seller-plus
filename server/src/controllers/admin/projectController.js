/* eslint-disable no-empty-function */
/* eslint-disable class-methods-use-this */
const ApiError = require('../../error/apiError');
const moveFile = require('../../utils/moveFile');
const { Project, ProjectFile } = require('../../models/adminPanel');

class ProjectController {
  async create(req, res, next) {
    try {
      const {
        number,
        submissionDate,
        descriptions,
        applicationId
      } = req.body;
      const { document } = req.files;
      const fileName = moveFile(document, 'projects');

      const project = await Project.create({
        number,
        submissionDate,
        descriptions,
        applicationId
      });

      const file = await ProjectFile.create({
        name: '',
        projectId: project.id,
        document: fileName
      });

      return res.json({ file });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getAll(_, res, next) {
    try {
      const projects = await Project.findAll();

      return res.json({ projects });
    }
    catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProjectController();
