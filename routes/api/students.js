const express = require('express');
const router = express.Router();
const Student = require('../../models/Student');
const mongoose = require('mongoose');

const newStudent = new Student({
  name: 'Pravenn Patel',
  email: 'praveenpatelonline@gmail.com',
  DOB: '2020-04-15T03:36:58.368+00:00',
  school: 'OPS',
  class: 10,
  division: 1,
  status: 'active',
});

// @route   GET api/students
// @desc    Get students route
// @access  Public
router.get('/', (req, res) => {
  res.json(newStudent);
});

router.post('/add', (req, res) => {
  Student.find({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: 'Another student already registered with this email id.',
      });
    } else {
      const newStudent = new Student({
        name: req.body.name,
        DOB: req.body.DOB,
        age: req.body.age,
        school: req.body.school,
        class: req.body.class,
        division: req.body.division,
        status: req.body.status,
        email: req.body.email,
      });
      newStudent
        .save()
        .then((user) => res.status(200).json({ user, success: 'Saved' }))
        .catch((err) =>
          res.status(400).json({ errormsg: 'registration failed', error: err })
        );
    }
  });
});

module.exports = router;
