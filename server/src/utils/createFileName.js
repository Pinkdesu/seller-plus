const uuid = require('uuid');

const createFileName = (image) => {
  let fileName = uuid.v4();

  switch (image.mimetype) {
    case 'image/png': {
      fileName += '.png';
      break;
    }
    default: fileName += '.jpg';
  }

  return fileName;
};

module.exports = createFileName;
