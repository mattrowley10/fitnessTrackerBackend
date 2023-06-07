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

routinesRouter.get("/public-routines", authRequired, async (req, res, next) => {
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

<<<<<<< HEAD
    const newRoutine = await createRoutines({
      creator_id: req.user.id,
      is_public,
=======
routinesRouter.post("/create-routine", authRequired, async (req, res, next) => {
  try {
    const { creatorId, isPublic, name, goal } = req.body;

    const newRoutine = await createRoutines({
      creatorId,
      isPublic,
>>>>>>> 146f704059d8537d2c02c13c85554e20d6dec5b0
      name,
      goal,
    });
    res.send(newRoutine);
  } catch (error) {
    next(error);
  }
});
<<<<<<< HEAD
=======

>>>>>>> 146f704059d8537d2c02c13c85554e20d6dec5b0
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
<<<<<<< HEAD

//needs authentication token
// routinesRouter.patch("/routines/:routinesId", async (req, res, next) => {
//   try {
//     const routineId = req.params.routineId;
//     const {isPublic, name, goal } = req.body;
=======
>>>>>>> 146f704059d8537d2c02c13c85554e20d6dec5b0

// routinesRouter.patch(
//   "/routines/:routineId",
//   authRequired,
//   async (req, res, next) => {
//     try {
//       const routineId = req.params.routineId;
//       const newRoutine = await updateRoutine({ isPublic, name, goal });
//       re.send(newRoutine);
//     } catch (error) {
//       next(error);
//     }
<<<<<<< HEAD

//     if (existingRoutine.creator_id !=== user.id) {
//       throw {
//         name: "unauthorized"
//       }
//     }
//   } catch (error) {
//     next(error)

// });

//needs authentication token

// routinesRouter.delete("/routines/:routineId", async (req, res, next) => {
//   try {
//     const routineId = req.params.routineId;

//     const routine = await getRoutineById(routineId);

//     if (!routine) {
//       throw {
//         name: "RoutineNotFoundError",
//         message: "That routine does not exist",
//       };
//     }

//     if (routine.creator_id !== req.user.id) {
//       throw {
//         name: "CreatorIdNotFoundError",
//         message: "You cannot delete a routine that ain't yours!",
//       };
//     }

//     await destroyRoutine(routineId);

//     res.status(204).send();
//   } catch (error) {
//     next(error);
=======
>>>>>>> 146f704059d8537d2c02c13c85554e20d6dec5b0
//   }
// );

// routinesRouter.delete(
//   "/routines/:routineId",
//   authRequired,
//   async (req, res, next) => {
//     try {
//       const routineId = req.params.routineId;
//       const routine = await getRoutineById(routineId);

//       await destroyRoutine(routineId);

//     } catch (error) {
//       next(error);
//     }
//   }
// );
module.exports = routinesRouter;
