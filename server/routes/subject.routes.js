const express = require('express');
const { createSubject, findAllSubjects, findSubjetsById } = require('../controllers/subject.controller');

const router = express.Router();

router.post('/create', createSubject);
router.get('/', findAllSubjects);
router.get('/:id', findSubjetsById);


module.exports = router;