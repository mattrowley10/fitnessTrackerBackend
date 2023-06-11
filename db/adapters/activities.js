const client = require("../client");

async function createActivities({ name, description }) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
    INSERT INTO activities(name, description)
    VALUES($1, $2)
    RETURNING *;
    `,
      [name, description]
    );
    return activity;
  } catch (error) {
    throw error;
  }
}

async function getActivitiesById(activityId) {
  try {
    const {
      rows: [activity],
    } = await client.query(
      `
        SELECT id, name, description
        FROM activities
        WHERE id=$1
        `,
      [activityId]
    );

    return activity;
  } catch (error) {
    throw error;
  }
}

async function getAllActivities() {
  try {
    const { rows } = await client.query(`
        SELECT *
        FROM activities;
        `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateActivity(activityId, name, description) {
  try {
    const { rows } = await client.query(
      `
    UPDATE activities
    SET name = $2, description = $3
    WHERE id = $1
    RETURNING *`,
      [activityId, name, description]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createActivities,
  getActivitiesById,
  getAllActivities,
  updateActivity,
};
