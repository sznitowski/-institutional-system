const models = require('../models');

//createSubject Post: /api/subjects
function createSubject(req, res) {
    const subject = {
        maths: req.body.maths,
        programming: req.body.programming,
        structureAndAlgorithms: req.body.structureAndAlgorithms,
        english: req.body.english,
        programming2: req.body.programming2,
        structureAndAlgorithms2: req.body.structureAndAlgorithms2,
        dataBaseStructure: req.body.dataBaseStructure
    }

    models.Subjects.create(subject).then(result => {
        res.status(201).json({
            message: 'Subject created successfully',
            subject: result
        })
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}

//findAllSubjects Get: /api/subjects
function findAllSubjects(req, res) {
    models.Subjects.findAll().then(result => {
        res.status(200).json({
            message: 'Subjects list',
            result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Someting went wrong',
            error: error
        })
    });
}

//findSubjetsById Get: /api/subjects/:id
function findSubjetsById(req, res) {
    const id = req.params.id

    models.Subjects.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: 'not found',
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
    createSubject,
    findAllSubjects,
    findSubjetsById
}