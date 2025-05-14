const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user._id });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find().populate('instructor', 'name email');
  res.json(courses);
};

exports.getCourseStudents = async (req, res) => {
  const enrollments = await Enrollment.find({ course: req.params.id }).populate('user', 'name email');
  res.json(enrollments);
};
