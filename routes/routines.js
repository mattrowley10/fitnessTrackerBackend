const routinesRouter = require("express").Router();
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
  getAllRoutines,
  getAllPublicRoutines,
} = require("../db/adapters/routines");

routinesRouter.get("/routines", async (req, res, next) => {
  try {
    const routines = await getAllRoutines();
    res.send(routines);
  } catch (error) {
    next(error);
  }
});

routinesRouter.post("/routines", async (req, res, next) => {
  try {
    const { creatorId, isPublic, name, goal } = req.body;
  } catch (error) {
    next(error);
  }
});

routinesRouter.patch("/routines/:routinesId", async (req, res, next) => {
  try {
  } catch (error) {}
});

routinesRouter.delete("/routines/:routineId", async (req, res, next) => {
  try {
  } catch (error) {}
});
module.exports = routinesRouter;
