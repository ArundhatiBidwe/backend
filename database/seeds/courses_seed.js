exports.seed = async function (knex) {
    // Clear existing entries
    await knex('courses').del();
  
    // Insert seed data
    await knex('courses').insert([
      {
        title: 'JavaScript for Beginners',
        description: 'An introductory course to JavaScript programming.',
        content: 'https://example.com/js-course-content',
        price: 49.99,
      },
      {
        title: 'Advanced Node.js',
        description: 'Learn advanced Node.js concepts and best practices.',
        content: 'https://example.com/node-course-content',
        price: 99.99,
      },
      {
        title: 'React Essentials',
        description: 'Build modern web applications with React.',
        content: 'https://example.com/react-course-content',
        price: 79.99,
      },
    ]);
  };
  