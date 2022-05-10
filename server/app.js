const express = require('express');
const bodyParser = require('body-parser');

const studentRoute = require('./routes/student.routes');
const subjectRoute = require('./routes/subject.routes');
const app = express();

app.use(bodyParser.json());

app.use("/api/student", studentRoute);
app.use("/api/subjects", subjectRoute);

module.exports = app;