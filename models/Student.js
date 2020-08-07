const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creacte Shema
const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  division: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = Student = new mongoose.model('student', StudentSchema);
const data = {
  name: 'Pravenn Patel',
  email: 'praveenpatelonline@gmail.com',
  DOB: '2020-04-15T03:36:58.368+00:00',
  school: 'OPS',
  class: 10,
  division: 1,
  status: 'active',
};
