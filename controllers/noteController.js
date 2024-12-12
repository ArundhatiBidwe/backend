const knex = require('../database/knex');

const getNotes = async (req, res) => {
  const { courseId } = req.query;
  try {
    const notes = await knex('notes').where({ course_id: courseId }).select('*');
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

const addNote = async (req, res) => {
  const { courseId, content } = req.body; // Extract data from request body
  const userId = req.user.id; // Extract user ID from the verified token (set by verifyToken middleware)

  try {
    // Insert the note into the database
    await knex('notes').insert({
      user_id: userId,
      course_id: courseId,
      content,
    });

    res.status(201).json({ message: 'Note added successfully' });
  } catch (err) {
    console.error(err); // Log error for debugging
    res.status(500).json({ error: 'Failed to add note' });
  }
};

module.exports = { getNotes, addNote };
