exports.seed = async function (knex) {
    // Clear existing entries
    await knex('notes').del();
  
    // Insert seed data
    await knex('notes').insert([
      {
        user_id: 2, // Assuming user_id 2 exists
        course_id: 1, // Assuming course_id 1 exists
        content: 'This is a great introduction to JavaScript!',
      },
      {
        user_id: 3, // Assuming user_id 3 exists
        course_id: 2, // Assuming course_id 2 exists
        content: 'The section on event loops is very detailed.',
      },
      {
        user_id: 2, // Assuming user_id 2 exists
        course_id: 3, // Assuming course_id 3 exists
        content: 'React hooks are super useful for functional components.',
      },
    ]);
  };
  