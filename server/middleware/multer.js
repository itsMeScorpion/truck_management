const multer = require('multer');

const imageStorage = multer.diskStorage({
  destination: 'public/images',
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: imageStorage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, data, cb) => {
    if (
      data.mimetype === 'image/png' ||
      data.mimetype === 'image/PNG' ||
      data.mimetype === 'image/jpg' ||
      data.mimetype === 'image/JPG' ||
      data.mimetype === 'image/jpeg' ||
      data.mimetype === 'image/JPEG'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Invalid image format'));
    }
  },
});
module.exports = { upload };
