const usersRouter = require("express").Router();
const { getAllUsers, getUserById } = require("../db/adapters/users");

usersRouter.post("/register", async (req, res, next) => {});

usersRouter.post("/login", async (req, res, next) => {});

usersRouter.get("/logout", async (req, res, next) => {});

usersRouter.get("/me", (req, res, next) => {});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
});
usersRouter.get(`/:id`, async (req, res, next) => {
  try {
    const id = req.params.id;
    const userById = await getUserById(id);
    res.send({
      userById,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = usersRouter;
