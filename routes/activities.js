const activitiesRouter = require("express").Router();
const SALT_ROUNDS = 10;
const bcrypt = require("bcrypt");
const { authRequired } = require("./utils");
const {
  getAllActivities,
  getActivitiesById,
  createActivities,
  updateActivity,
} = require("../db/adapters/activities");
const { getPublicRoutinesByActivity } = require("../db/adapters/routines");

activitiesRouter.get("/", authRequired, async (req, res, next) => {
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
      const activity = await createActivities({
        activity_id: req.user.id,
        name,
        description,
      });
      res.send(activity);
    } catch (error) {
      next(error);
    }
  }
);

activitiesRouter.patch(
  "/:activity-id",
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
      res.send({ updatedActivity });
    } catch (error) {
      next(error);
    }
  }
);

activitiesRouter.get(
  "/:activity-id/routines",
  authRequired,
  async (req, res, next) => {
    try {
      const { activity_id } = req.params;
      const activity = await getActivitiesById(activity_id);
      const routines = await getPublicRoutinesByActivity(activity_id);
      res.send({ activity, routines });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = activitiesRouter;
