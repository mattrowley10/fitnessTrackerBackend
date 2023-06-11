const routinesRouter = require("express").Router();
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
  getAllRoutines,
  getAllPublicRoutines,
  getRoutineById,
  destroyRoutine,
  createRoutines,
  updateRoutine,
} = require("../db/adapters/routines");
const { authRequired } = require("./utils");

routinesRouter.get("/", authRequired, async (req, res, next) => {
  try {
    const routines = await getAllRoutines();
    res.send(routines);
  } catch (error) {
    next(error);
  }
});

routinesRouter.get("/public-routines", async (req, res, next) => {
  try {
    const publicRoutines = await getAllPublicRoutines();
    res.send(publicRoutines);
  } catch (error) {
    next(error);
  }
});

routinesRouter.post("/create-routine", authRequired, async (req, res, next) => {
  try {
    const { is_public, name, goal } = req.body;

    const newRoutine = await createRoutines({
      creator_id: req.user.id,
      is_public,
      name,
      goal,
    });
    res.send(newRoutine);
  } catch (error) {
    next(error);
  }
});

routinesRouter.get("/:id", authRequired, async (req, res, next) => {
  try {
    const id = req.params.id;
    const routineById = await getRoutineById(id);
    res.send({
      routineById,
    });
  } catch (error) {
    next(error);
  }
});

routinesRouter.patch("/:routineId", authRequired, async (req, res, next) => {
  try {
    const { is_public, name, goal } = req.body;
    const id = req.params.routineId;
    console.log("patch", req.params);
    const routine_id = await getRoutineById(id);
    const newRoutine = await updateRoutine(is_public, name, goal, id);
    res.send(newRoutine);
  } catch (error) {
    next(error);
  }
});

routinesRouter.delete("/:routine_id", authRequired, async (req, res, next) => {
  try {
    const routineId = req.params.routine_id;
    const routine = await getRoutineById(routineId);

    await destroyRoutine(routineId);
  } catch (error) {
    next(error);
  }
});
module.exports = routinesRouter;
