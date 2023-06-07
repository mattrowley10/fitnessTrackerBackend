const activitiesRouter = require("express").Router();
const {
  getAllActivities,
  getActivitiesById,
} = require("../db/adapters/activities");
const { authRequired } = require("./utils");

activitiesRouter.get("/", authRequired, async (req, res, next) => {
  try {
    const activities = await getAllActivities();
    res.send(activities);
  } catch (error) {
    next(error);
  }
});
activitiesRouter.get("/:id", authRequired, async (req, res, next) => {
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

activitiesRouter.post("/create-activity", authRequired, (req, res, next) => {
  try {
    const { name, description } = req.body;
  } catch (error) {
    next(error);
  }
});
module.exports = activitiesRouter;
