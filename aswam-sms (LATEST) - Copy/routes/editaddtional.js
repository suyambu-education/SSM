var express = require('express');
var router = express.Router();

var editController = require('../Controllers/EditController');
router.get('/edit/:id', function(req, res) {
    editController.getByIdAddtion(req,res);
});

router.post('/update/:id',function(req, res){
    editController.UpdateByIdAddtion(req,res);
});
router.post('/delete/:id', function(req, res, next) {
    editController.deleteAddtional(req, res);
});
module.exports = router;