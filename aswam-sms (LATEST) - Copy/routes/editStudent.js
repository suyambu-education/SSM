var express = require('express');
var router = express.Router();

var editController = require('../Controllers/EditController');
router.get('/edit/:id', function(req, res) {
    editController.getByIdStudent(req,res);
});
router.post('/update/:id',function(req, res){
    editController.UpdateByIdStudent(req,res);
});
router.post('/delete/:id', function(req, res, next) {
    editController.deleteStudent(req, res);
  });
module.exports = router;