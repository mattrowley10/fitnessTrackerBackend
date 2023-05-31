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

async function getActivitesById(activityId) {
  try {
    const {
      rows: [activity],
    } = await client.query(`
        SELECT id, name, description
        FROM activities
        WHERE id=${activityId}
        `);

    if (!activity) {
      throw {
        name: "ActivityNotFoundError",
        message: "No activity with that id exists",
      };
    }
    return activity;
  } catch (error) {
    throw error;
  }
}

async function getAllActivities() {
  try {
    const { rows } = await client.query(`
        SELECT id, name, activity
        FROM activities;
        `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateActivity() {
  try {
    //need to return to this one
  } catch (error) {}
}

module.exports = { createActivities, getActivitesById, getAllActivities };
