var Student = require('../models/student');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/school');


var students = [
    new Student({
        name: 'srinivasan',
        phone: '99999999999',
        age: '30',
        email: 'vasansrini8206@gmail.com'
    }),
    new Student({
        name: 'kali',
        phone: '99999999999',
        age: '30',
        email: 'kali@gmail.com'
    }),
    new Student({
        name: 'vinoth',
        phone: '99999999999',
        age: '30',
        email: 'vinoth@gmail.com'
    }),
];

var done =0;
for(var i =0; i < students.length; i++){

    students[i].save(function(err, result){
        done++;
        if(done === students.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
