const client = require("../client");

async function createRoutines(creator_id, is_public, name, goal) {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO routines(creator_id, is_public, name, goal)
        VALUES($1, $2, $3, $4)
        RETURNING *;
         `,
      [creator_id, is_public, name, goal]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRoutineById(id) {
  try {
    const { rows } = await client.query(
      `
            SELECT *
            FROM routines
            WHERE id = $1
            `,
      [id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRoutinesWithoutActivities() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM routines
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllRoutines() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM routines 
    LEFT JOIN activities 
    ON routines.id = activities.id
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllPublicRoutines() {
  try {
    const { rows } = await client.query(`
    SELECT *  
    FROM routines 
    LEFT JOIN activities     
    ON routines.id = activities.id
    WHERE is_public = true
        `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getAllRoutinesByUser(username) {
  try {
    const username = req.params.username;
    const { rows } = await client.query(`
    SELECT *
    FROM routines 
    LEFT JOIN activities 
    ON routines.id = activities.id 
    WHERE username = $1
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getPublicRoutinesByUser(username) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM routines
    JOIN users ON routines.creator_id = users.id
    WHERE routines.is_public = true
    AND users.username = $1 
    `,
      [username]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getPublicRoutinesByActivity(activityId) {
  try {
    const { rows } = await client.query(
      `
    SELECT *
    FROM routines
    JOIN routine_activities ON routines.id = routine_activities.routine_id
    WHERE routines.is_public = true
    AND routine_activities.activity_id = $1
    `,
      [activityId]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateRoutine(is_public, name, goal, id) {
  try {
    const { rows } = await client.query(
      `
    UPDATE routines
    SET is_public = $1, name = $2, goal = $3
    WHERE id = $4
    RETURNING *
    `,
      [is_public, name, goal, id]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function destroyRoutine(routineId) {
  try {
    const { rows } = await client.query(
      `
    DELETE FROM routines
    WHERE id = $1
    RETURNING *`,
      [routineId]
    );

    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createRoutines,
  getRoutineById,
  getRoutinesWithoutActivities,
  getAllRoutines,
  getAllPublicRoutines,
  getAllRoutinesByUser,
  getPublicRoutinesByUser,
  getPublicRoutinesByActivity,
  destroyRoutine,
  updateRoutine,
};
