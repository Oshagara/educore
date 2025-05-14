const express = require('express');
const router = express.Router();
const { createCourse, getCourses, getCourseStudents } = require('../controllers/courseController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.post('/', protect, restrictTo('instructor'), createCourse);
router.get('/', getCourses);
router.get('/:id/students', protect, restrictTo('instructor', 'admin'), getCourseStudents);

module.exports = router;
