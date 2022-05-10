const models = require('../models');

//createStudent Post: /api/student/create
function createStudent(req, res) {
    const student = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    }

    models.Student.create(student).then(result => {
        res.status(201).json({
            message: 'Student created successfully',
            student: result
        })
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

//findAllStudents Get: /api/student
function findAllStudents(req, res) {

    models.Student.findAll()
        .then(result => {
            res.status(200).json({
                message: 'Students list',
                result
            });
        }).catch(error => {
            res.status(500).json({
                message: 'Someting went wrong',
                error: error
            })
        });
}

//findStudentById Get: /api/stundet/:id
 function findStudentById(req, res) {
    const id = req.params.id;

    models.Student.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'User not found',
            })
        }
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        })
    })
} 

module.exports = {
    createStudent,
    findAllStudents,
    findStudentById
}