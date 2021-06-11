const path = require('path');
const createFileName = require('./createFileName');
const { STATIC_FOLDER } = require('../constants');

const moveFile = (file, location = '') => {
  const fileName = createFileName(file);
  const folderPath = `${STATIC_FOLDER}/${location}`;

  file.mv(path.resolve(__dirname, '../../', folderPath, fileName));

  return fileName;
};

module.exports = moveFile;
