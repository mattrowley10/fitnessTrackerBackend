const activitiesRouter = require("express").Router();
const {
  getAllActivities,
  getActivitiesById,
  createActivities,
} = require("../db/adapters/activities");
const { getPublicRoutinesByActivity } = require("../db/adapters/routines");
const { authRequired } = require("./utils");

activitiesRouter.get("/activities", authRequired, async (req, res, next) => {
  try {
    const activities = await getAllActivities();
    res.send(activities);
  } catch (error) {
    next(error);
  }
});
activitiesRouter.get("/:activityid", authRequired, async (req, res, next) => {
  try {
    const id = req.params.id;
    const activitiesById = await getActivitiesById(id);
    res.send({
      activitiesById,
    });
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

activitiesRouter.get(
  "/:activityId/routines",
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
