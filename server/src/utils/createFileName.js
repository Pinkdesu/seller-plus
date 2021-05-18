const uuid = require('uuid');

const createFileName = (image) => {
  const fileName = uuid.v4();
  const fileType = image.mimetype.split('/')[1];

  return `${fileName}.${fileType}`;
};

module.exports = createFileName;
