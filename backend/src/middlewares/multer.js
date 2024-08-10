import multer from 'multer';

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'resume') {
      cb(null, 'resumes');
    } else if (file.fieldname === 'profile') {
      cb(null, 'images');
    } else {
      cb(new Error('Invalid field name'), false);
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
