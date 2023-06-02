const client = require("../client");

async function createRoutines({ creator_id, is_public, name, goal }) {
  try {
    const {
      rows: [routine],
    } = await client.query(
      `
        INSERT INTO routines("creator_id", is_public, name, goal)
        VALUES($1, $2, $3, $4)
        RETURNING *;
         `,
      [creator_id, is_public, name, goal]
    );
    return routine;
  } catch (error) {
    throw error;
  }
}

async function getRoutineById(id) {
  try {
    const {
      rows: [routine],
    } = await client.query(`
            SELECT *
            FROM routines
            WHERE id = $1
            `);

    if (!routine) {
      throw {
        name: "RoutineNotFoundError",
        message: "No Routine with that id exists",
      };
    }
    return routine;
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
    ON routines.creator_id = activities.id
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
    SELECT routines *
    FROM routines
    JOIN users ON routines.creator_id = users.id
    WHERE routines.is_public = true
    AND users.username = $1 
    `[username]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getPublicRoutinesByActivity(activityId) {
  try {
    const { rows } = await client.query(`
    `);
  } catch (error) {
    throw error;
  }
}

async function updateRoutine(routineId, isPublic, name, goal) {
  try {
  } catch (error) {
    throw error;
  }
}

async function destroyRoutine(routineId) {
  try {
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
