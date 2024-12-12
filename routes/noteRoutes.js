const express = require('express');
const { getNotes, addNote } = require('../controllers/noteController');
const { verifyToken } = require('../config/auth');
const router = express.Router();

// GET /api/notes?courseId=:id - Fetch notes for a specific course
router.get('/', verifyToken, getNotes);

// POST /api/notes - Add a new note
router.post('/', verifyToken, addNote);

module.exports = router;
