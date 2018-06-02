var express = require('express');
var router = express.Router();

var Settings = require('../Controllers/SettingsController');

router.get('/', function(req, res) {
   Settings.default(req,res);
});
// ManageClass
router.get('/ManageClass/view', function(req, res) {
    Settings.ViewManageClass(req,res);
 });
 router.get('/ManageClass/Add', function(req, res) {
    Settings.AddManageClass(req,res);
 });
 router.post('/ManageClass/save', function(req, res) {
    Settings.SaveManageClass(req,res);
 });
 router.get('/ManageClass/edit/:id', function(req, res) {
    Settings.editSettingManageClass(req,res);
 });
 router.post('/ManageClass/update/:id',function(req, res) {
    Settings.update(req,res);
 });
 router.post('/ManageClass/delete/:id',function(req, res) {
    Settings.Delete(req,res);
 });
//  ManageBatch
 router.get('/ManageBatch/view', function(req, res) {
    Settings.ViewManageBatch(req,res);
 });
 router.post('/ManageBatch/fetchBatch/:id', function(req, res) {
    Settings.fetch(req,res);
 });

module.exports = router;