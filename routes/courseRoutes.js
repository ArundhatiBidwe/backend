const express = require('express');
const { getCourses, addCourse } = require('../controllers/courseController');
const { verifyToken, verifyAdmin } = require('../config/auth');
const router = express.Router();

// GET /api/courses - Fetch all courses
router.get('/', verifyToken, getCourses);

// POST /api/courses - Add a new course (Admin only)
router.post('/', verifyToken, verifyAdmin, addCourse);

module.exports = router;
