const Enrollment = require('../models/Enrollment');

exports.enroll = async (req, res) => {
  try {
    const exists = await Enrollment.findOne({ user: req.user._id, course: req.body.course });
    if (exists) return res.status(400).json({ message: 'Already enrolled' });

    const enrollment = await Enrollment.create({ user: req.user._id, course: req.body.course });
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getEnrollments = async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id }).populate('course');
  res.json(enrollments);
};
