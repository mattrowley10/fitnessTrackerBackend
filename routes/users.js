const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../db/adapters/users");

usersRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await createUser({ username, password: hashedPassword });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// usersRouter.post("/login", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const comparePassword = await bcrypt.compare(username, password, function(err, res))
//   } catch (error) {

//   }
// });

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
