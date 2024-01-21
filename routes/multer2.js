const multer = require('multer');
const {v4: uuidv4} = require('uuid');
const path = require('path');

const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads/dp')
    },
    filename: function (req, file, cb) {
      const uniquename = uuidv4();
      cb(null, uniquename+path.extname(file.originalname));
    }
  })

  const upload2 = multer({ storage: storage2 })

  module.exports = upload2;