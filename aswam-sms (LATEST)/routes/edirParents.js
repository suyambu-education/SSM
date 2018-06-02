var express = require('express');
var router = express.Router();

var editController = require('../Controllers/EditController');
router.get('/edit/:id', function(req, res) {
    editController.getByIdParent(req,res);
});
router.post('/update/:id',function(req, res){
    editController.UpdateByIdParents(req,res);
});
router.post('/delete/:id', function(req, res, next) {
    editController.deleteParents(req, res);
  });
module.exports = router;