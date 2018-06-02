var mongoose = require("mongoose");
var Student = require('../Models/Student');

var studentController = {};

// Show list of students
studentController.list = function(req, res) {
  Student.find({}).exec(function (err, students) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Students/index", {students: students});
    }
  });
};

// Show student by id
studentController.show = function(req, res) {
  Student.findOne({_id: req.params.id}).exec(function (err, student) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Students/show", {student: student});
    }
  });
};

// Create new student
studentController.create = function(req, res) {
  res.render("../views/Students/create");
};

// Save new student
studentController.save = function(req, res) {
  var student = new Student(req.body);

  student.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/Students/create");
    } else {
      console.log("Successfully created an Students.");
      res.redirect("/Students/show/"+student._id);
    }
  });
};

// Edit an student
studentController.edit = function(req, res) {
  Student.findOne({_id: req.params.id}).exec(function (err, student) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/Students/edit", {student: student});
    }
  });
};

// Update an student emp
studentController.update = function(req, res) {
  Student.findByIdAndUpdate(req.params.id, { $set: { 
                                    name: req.body.name,
                                    phone: req.body.phone, 
                                    age: req.body.age, 
                                    email: req.body.email 
                                  }}, { new: true }, function (err, student) {
    if (err) {
      console.log(err);
      res.render("../views/Students/edit", {student: req.body});
    }
    res.redirect("/students/show/"+student._id);
  });
};

// Delete an student
studentController.delete = function(req, res) {
  Student.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Student deleted!");
      res.redirect("/students");
    }
  });
};

module.exports = studentController;
