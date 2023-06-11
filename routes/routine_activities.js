const routineActivityRouter = require("express").Router();
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { authRequired } = require("./utils");
const {
  createRoutineActivities,
  updateRoutineActivity,
  destroyRoutineActivity,
} = require("../db/adapters/routine_activities");

routineActivityRouter.post("/routine-activities", async (res, req, next) => {
  try {
    const routineActivity = await createRoutineActivities({
      routine_id,
      activity_id,
      count,
      duration,
    });
    res.setEncoding(routineActivity);
  } catch (error) {
    next(error);
  }
});

routineActivityRouter.patch(
  "/:routine-activities",
  authRequired,
  async (req, res, next) => {
    try {
      const routineActivityId = req.params.routine_activities.id;
      const { count, duration } = req.body;

      const updatedRoutineActivity = await updateRoutineActivity(
        routineActivityId,
        count,
        duration
      );
      res.send(updatedRoutineActivity);
    } catch (error) {
      next(error);
    }
  }
);

routineActivityRouter.delete(
  "/:routine_activities",
  authRequired,
  async (req, res, next) => {
    try {
      const routineActivityId = req.params.routine_activities.id;
      await destroyRoutineActivity(routineActivityId);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = routineActivityRouter;
