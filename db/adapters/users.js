const client = require("../client");

async function createUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO  users(username, password)
        VALUES($1, $2)
        ON CONFLICT (username) DO NOTHING
        RETURNING *;`,
      [username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUser() {
  try {
    const { rows } = await client.query(`
        SELECT id, username, password
        FROM users;
        `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {
      rows: [user],
    } = await client.query(`
        SELECT id, username
        FROM users
        WHERE id=${userId}
         `);
    if (!user) {
      throw {
        name: "UserNotFoundError",
        message: "A user with that is does not exist",
      };
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { createUser };
