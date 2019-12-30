
var UserSchema = require('../models/users.model');
var subjectSchema = require('../models/subjects.model');
const path = require('path'); 
var Excel = require('exceljs');




module.exports.get_index = async function(req, res, next) {
    if (req.isAuthenticated() && req.user.roles == "admin") {
        var subject = await subjectSchema.find();


        res.render('admin.pug', {user: req.user, subjectSchema: subject});
    } else {
        res.redirect('/');
    }


   
}



module.exports.cap_tai_khoan = function(req, res, next) {
 

    var wb = new Excel.Workbook();
  
      wb.xlsx.readFile(path.join(__dirname, '..', 'uploads/students/'+ req.file.filename)).then(async function(){
        var sh = wb.getWorksheet("Sheet1");
    
    
        //Get all the rows data [1st and 2nd column]
        for (i = 2; i <= sh.rowCount; i++) {
  
          var username = sh.getRow(i).getCell(1).value.toString();
          var name = sh.getRow(i).getCell(2).value;
  
          await UserSchema.findOne({'username': username}, function(err, user) {
              
              if (err) return done(err);
              if (user) {
                  return;
              } else {
                  var newUser = new UserSchema();
                  
                  newUser.username = username;
                  newUser.password = newUser.generateHash(username);
                  newUser.name = name;
                  newUser.roles = "student";
                  newUser.email = username + "@vnu.edu.vn";
                  newUser.save(function(err) {
                      if (err) 
                          console.log(err);
                    });
              }
  
          });
        }
      })
    
      res.redirect('/quan-tri');
  };


  



  module.exports.du_dieu_kien = function(req, res, next) {
 

    var wb = new Excel.Workbook();
  
      wb.xlsx.readFile(path.join(__dirname, '..', 'uploads/du_dieu_kien/'+ req.file.filename)).then(async function(){
        var sh = wb.getWorksheet("Sheet1");
    
    
        //Get all the rows data [1st and 2nd column]
        for (i = 2; i <= sh.rowCount; i++) {
  
          var username = sh.getRow(i).getCell(1).value.toString();
          var name = sh.getRow(i).getCell(2).value;
  
          await UserSchema.findOne({'username': username}, function(err, user) {
              
              if (err) return done(err);
              if (user) {
                  return;
              } else {
                  var newUser = new UserSchema();
                  
                  newUser.username = username;
                  newUser.password = newUser.generateHash(username);
                  newUser.name = name;
                  newUser.roles = "student";
                  newUser.email = username + "@vnu.edu.vn";
                  newUser.save(function(err) {
                      if (err) 
                          console.log(err);
                    });
              }
  
          });
        }
      })
    
      res.redirect('/quan-tri');
  };




module.exports.khong_du_dieu_kien = function(req, res, next) {
 

    var wb = new Excel.Workbook();
  
      wb.xlsx.readFile(path.join(__dirname, '..', 'uploads/khong_du_dieu_kien/'+ req.file.filename)).then(async function(){
        var sh = wb.getWorksheet("Sheet1");
    
    
        //Get all the rows data [1st and 2nd column]
        for (i = 2; i <= sh.rowCount; i++) {
  
          var username = sh.getRow(i).getCell(1).value.toString();
          var name = sh.getRow(i).getCell(2).value;
  
          await UserSchema.findOne({'username': username}, function(err, user) {
              
              if (err) return done(err);
              if (user) {
                  return;
              } else {
                  var newUser = new UserSchema();
                  
                  newUser.username = username;
                  newUser.password = newUser.generateHash(username);
                  newUser.name = name;
                  newUser.roles = "student";
                  newUser.email = username + "@vnu.edu.vn";
                  newUser.save(function(err) {
                      if (err) 
                          console.log(err);
                    });
              }
  
          });
        }
      })
    
      res.redirect('/quan-tri');
  };


module.exports.danh_sach_hoc_phan = function(req, res, next) {

    var code = req.body.code;
    console.log(code);
    var data = "danh_sach_hoc_phan";

    res.json({haha: code});

   
}


module.exports.quan_ly_ca_thi = function(req, res, next) {
    var data = "quan_ly_ca_thi";

    res.send(data);
}
