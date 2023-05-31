const client = require("../client");

async function getRoutineActivityById(routineActivityId) {
  try {
  } catch (error) {
    throw error;
  }
}

async function addActivityById(routineId, activityId, count, duration) {
  try {
  } catch (error) {
    throw error;
  }
}

async function updateRoutineActivity(routineActivityId, count, duration) {
  try {
  } catch (error) {
    throw error;
  }
}

async function destroyRoutineActivity(routineActivityId) {
  try {
  } catch (error) {
    throw error;
  }
}

// async function getRoutineActivityByRoutine(routineId) {
//   try {
//     const {
//       rows: [routine],
//     } = await client.query(`
//     SELECT *
//     FROM routineactivities
//     WHERE routine_id=${routineId}`);
//   } catch (error) {
//     throw error;
//   }
// }
module.exports = {
  getRoutineActivityById,
  addActivityById,
  updateRoutineActivity,
  destroyRoutineActivity,
  getRoutineActivityByRoutine,
};
