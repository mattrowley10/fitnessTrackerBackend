const client = require("../client");

async function createRoutineActivities({
  routine_id,
  activity_id,
  count,
  duration,
}) {
  try {
    const {
      rows: [routine_activity],
    } = await client.query(
      `
        INSERT INTO  routine_activities(routine_id, activity_id, count, duration)
        VALUES($1, $2, $3, $4)
        RETURNING *;`,
      [routine_id, activity_id, count, duration]
    );
    return routine_activity;
  } catch (error) {
    throw error;
  }
}

async function getRoutineActivityById(routineActivityId) {
  try {
    const {
      rows: [routine_activity],
    } = await client.query(`
    SELECT routine_id, activity_id, count, duration
    FROM routine_activities 
    `);
    return routine_activity;
  } catch (error) {
    throw error;
  }
}

async function addActivityById(routineId, activityId, count, duration) {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO routine_activities (routine_id, activity_id, count, duration)
      VALUES ($1, $2, $3, $4)
      RETURNING *`[(routineId, activityId, count, duration)]
    );
    return rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateRoutineActivity(routineActivityId, count, duration) {
  try {
    const { rows } = await client.query(
      `
    UPDATE routine_activities
    SET count = $2, 
    duration = $3
    WHERE id = $1
    RETURNING *`,
      [routineActivityId, count, duration]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function destroyRoutineActivity(routineActivityId) {
  try {
    const { rows } = await client.query(
      `
    DELETE FROM routine_activities
    WHERE id = $1
    RETURNING *`,
      [routineActivityId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRoutineActivitiesByRoutine(routine_id) {
  try {
    const { rows } = await client.query(`
    SELECT *
    FROM routine_activities
    WHERE routine_id=$1`);
    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getRoutineActivityById,
  addActivityById,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivitiesByRoutine,
  createRoutineActivities,
};
