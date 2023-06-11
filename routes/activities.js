const activitiesRouter = require("express").Router();
const SALT_ROUNDS = 10;
const bcrypt = require("bcrypt");
const { authRequired } = require("./utils");
const {
  getAllActivities,
  getActivitiesById,
  createActivities,
  updateActivity,
  updateActivity,
} = require("../db/adapters/activities");
const { getPublicRoutinesByActivity } = require("../db/adapters/routines");

activitiesRouter.get("/activities", authRequired, async (req, res, next) => {
  try {
    const activities = await getAllActivities();
    res.send(activities);
  } catch (error) {
    next(error);
  }
});

activitiesRouter.post(
  "/create-activity",
  authRequired,
  async (req, res, next) => {
    try {
      const { name, description } = req.body;
      const activity = await createActivities({ name, description });
      req.send(activity);
    } catch (error) {
      next(error);
    }
  }
);

activitiesRouter.patch(
  "/:activity_id",
  authRequired,
  async (req, res, next) => {
    try {
      const { activity_id } = req.params;
      const { name, description } = req.body;
      const updatedActivity = await updateActivity(
        activity_id,
        name,
        description
      );
      res.send(updatedActivity);
    } catch (error) {
      next(error);
    }
  }
);

activitiesRouter.get(
  "/:activity_id/routines",
  authRequired,
  async (req, res, next) => {
    try {
      const { activity_id } = req.params;
      const activity = await getActivitiesById(activity_id);
      const routines = await getPublicRoutinesByActivity(activity_id);
      req.send({ activity, routines });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = activitiesRouter;
