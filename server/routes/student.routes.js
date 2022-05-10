const express = require('express');
const { createStudent, findAllStudents, findStudentById } = require('../controllers/student.controller');

const router = express.Router();

router.post('/create', createStudent);
router.get('/', findAllStudents);
router.get('/:id', findStudentById);

module.exports = router;