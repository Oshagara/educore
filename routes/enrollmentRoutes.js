const express = require('express');
const router = express.Router();
const { enroll, getEnrollments } = require('../controllers/enrollmentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.post('/', protect, restrictTo('student'), enroll);
router.get('/', protect, restrictTo('student'), getEnrollments);

module.exports = router;
