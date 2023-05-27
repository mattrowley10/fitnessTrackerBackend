

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
        SELECT id, username
        FROM users;
        `);
  } catch (error) {
    throw error;
  }
}

async function getAllRoutines() {
  try {
  } catch (error) {
    throw error;
  }
}

