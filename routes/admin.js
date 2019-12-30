var express = require('express');
var router = express.Router();
var multer = require('multer');
var passport_config = require('../configs/passport.config');
var admin_controller = require('../controllers/admin.controller');
const path = require('path'); 
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '..', 'uploads/students'));
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
  });
  
  var upload = multer({ storage: storage});
/* GET home page. */
router.get('/', admin_controller.get_index);



router.post('/cap-tai-khoan', upload.single('myfile'),  admin_controller.cap_tai_khoan);

router.post('/du-dieu-kien', upload.single('myfile'),  admin_controller.du_dieu_kien);

router.post('/khong-du-dieu-kien', upload.single('myfile'),  admin_controller.khong_du_dieu_kien);

router.post('/danh-sach-hoc-phan', admin_controller.danh_sach_hoc_phan);

router.post('/quan-ly-ca-thi', admin_controller.quan_ly_ca_thi);

passport_config.serializeUser;
passport_config.deserializeUser;

passport_config.admin_login;

module.exports = router;
