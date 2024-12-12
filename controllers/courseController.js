const knex = require('../database/knex');

const getCourses = async (req, res) => {
  try {
    const courses = await knex('courses').select('*'); // Fetch all courses
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

const addCourse = async (req, res) => {
  const { title, description, content, price } = req.body;
  try {
    const [id] = await knex('courses').insert({ title, description, content, price });
    res.status(201).json({ id, message: 'Course added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add course' });
  }
};

module.exports = { getCourses, addCourse };
