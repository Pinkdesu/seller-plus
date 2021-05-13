const path = require('path');
const createFileName = require('./createFileName');

const moveFile = (file, location = 'static') => {
  const fileName = createFileName(file);
  file.mv(path.resolve(__dirname, '../../', location, fileName));

  return fileName;
};

module.exports = moveFile;
