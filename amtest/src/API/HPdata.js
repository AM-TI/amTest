const characters = require('./hp-characters.json');
const gryffindor = require('./hp-gryffindor.json');
const staff = require('./hp-staff.json');
const students = require('./hp-students.json');

module.exports = () => ({
  characters,
  gryffindor,
  staff,
  students,
});