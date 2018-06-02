var express = require('express');
var router = express.Router();

var editController = require('../Controllers/EditController');
router.get('/edit/:id', function(req, res) {
    editController.getByIdPrevious(req,res);
});
router.post('/update/:id',function(req, res){
    editController.UpdateByIdPrevious(req,res);
});
router.post('/delete/:id', function(req, res, next) {
    editController.deletePrevious(req, res);
  });
module.exports = router;